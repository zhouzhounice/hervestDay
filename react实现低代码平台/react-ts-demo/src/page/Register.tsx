import React, { FC } from "react";
import { Space, Typography, Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Form.module.scss";
import { Link } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";

type UserInfo = {
  [key: string]: string;
};

const { Title } = Typography;

const Register: FC = () => {
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
          <Title level={2}>注册新用户</Title>
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
              label="确认密码"
              name="confirm"
              rules={[{ required: true, message: "请再次输入密码！" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="昵称"
              name="nickname"
              rules={[{ required: true, message: "请输入昵称！" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
                <span>
                  已有账户，去<Link to={LOGIN_PATHNAME}>登录</Link>
                </span>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
