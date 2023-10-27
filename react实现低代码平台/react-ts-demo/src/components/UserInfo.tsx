import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";
// import { useRequest } from "ahooks";
// import { getUserInfoService } from "../services/user";
import { useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { removeToken } from "../utils/user-token";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { loginOutReducer } from "../store/userReducer";

const UserInfo: FC = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  // const { data } = useRequest(getUserInfoService);
  // const { username, nickname } = data || {};

  const { username, nickname } = useGetUserInfo();

  const logout = () => {
    dispatch(loginOutReducer());
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
