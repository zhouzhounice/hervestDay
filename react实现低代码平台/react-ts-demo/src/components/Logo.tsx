import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Space, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
import Style from "./Logo.module.scss";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { HOME_PATHNAME, MANAGE_PATHNAME } from "../router";

const { Title } = Typography;

const Logo: FC = () => {
  const { username } = useGetUserInfo();
  const [pathname, setPathname] = useState(HOME_PATHNAME);
  useEffect(() => {
    if (username) {
      setPathname(MANAGE_PATHNAME);
    }
  }, [username]);
  return (
    <div className={Style.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>测试demo</Title>
        </Space>
      </Link>
    </div>
  );
};

export default Logo;
