import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Space, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
import Style from "./Logo.module.scss";

const { Title } = Typography;

const Logo: FC = () => {
  return (
    <div className={Style.container}>
      <Link to={"/"}>
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
