import React, { FC, useEffect } from "react";
import styles from "./Form.module.scss";
import {
  Button,
  Form,
  Input,
  Space,
  Typography,
  Checkbox,
  message,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import { setToken } from "../utils/user-token";
import { loginService } from "../services/user";
import { MANAGE_PATHNAME, REGISTER_PATHNAME } from "../router";

type UserInfo = {
  [key: string]: string;
};

const { Title } = Typography;

const USERNAME_KEY = "USERNAME";
const PASSWORD_KEY = "PASSWORD";

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(PASSWORD_KEY, password);
}

function deleteUserFromStorage() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(PASSWORD_KEY);
}

function getUserInfoFromStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  };
}

const Login: FC = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();

  const { run } = useRequest(
    async (username, password): Promise<any> => {
      await loginService(username, password);
    },
    {
      manual: true,
      onSuccess(result) {
        const { token = "" } = result;
        setToken(token);
        message.success("登录成功");
        nav(MANAGE_PATHNAME);
      },
    },
  );

  useEffect(() => {
    const { username, password } = getUserInfoFromStorage();
    form.setFieldsValue({ username, password });
  }, []);
  const onFinish = (values: UserInfo) => {
    const { username, password, remember } = values || {};
    run(username, password);
    if (remember) {
      rememberUser(username, password);
    } else {
      deleteUserFromStorage();
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Space>
          <Title level={2}>
            <UserOutlined />
          </Title>
          <Title level={2}>登录账户</Title>
        </Space>
        <div>
          <Form
            name="register"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            initialValues={{ remember: true }}
            autoComplete="off"
            form={form}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: "请输入用户名！" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码！" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <span>
                没有账户，去<Link to={REGISTER_PATHNAME}>注册</Link>
              </span>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
