import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import { MANAGE_PATHNAME } from "../router";

const NotFound: FC = () => {
  const nav = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在！"
      extra={
        <Button type="primary" onClick={() => nav(MANAGE_PATHNAME)}>
          返回首页
        </Button>
      }
    />
  );
};

export default NotFound;
