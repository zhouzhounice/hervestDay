import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";
import { useRequest } from "ahooks";
import { getUserInfoService } from "../services/user";
import { UserOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { removeToken } from "../utils/user-token";

const UserInfo: FC = () => {
  const nav = useNavigate();
  const { data } = useRequest(getUserInfoService);
  const { username, nickname } = data || {};

  const logout = () => {
    removeToken();
    nav(LOGIN_PATHNAME);
  };

  const UserInfo = (
    <>
      <Space>
        <span style={{ color: "#e8e8e8" }}>
          <Space>
            <UserOutlined />
            <>{nickname || username}</>
          </Space>
        </span>
        <Button type="link" onClick={logout}>
          登出
        </Button>
      </Space>
    </>
  );

  const Login = (
    <>
      <Link to={LOGIN_PATHNAME}>登录</Link>
    </>
  );
  return <>{username ? UserInfo : Login}</>;
};

export default UserInfo;
