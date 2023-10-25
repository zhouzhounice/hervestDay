import React, { FC } from "react";
import styles from "./Form.module.scss";
import { Button, Form, Input, Space, Typography, Checkbox } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { REGISTER_PATHNAME } from "../router";

type UserInfo = {
  [key: string]: string;
};

const { Title } = Typography;

const Login: FC = () => {
  const handleSubmit = (val: UserInfo) => {
    console.log(val);
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
            onFinish={handleSubmit}
            autoComplete="off"
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
