import React, { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Space, Button, Divider } from "antd";
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Styles from "./ManageLayout.module.scss";

const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className={Styles.containerStyle}>
      <div className={Styles.left}>
        <Space direction="vertical">
          <Button type="primary" icon={<PlusOutlined />} size="large">
            创建问卷
          </Button>
          <Divider />
          <Button
            size="large"
            icon={<UnorderedListOutlined />}
            type={pathname.startsWith("/manage/list") ? "default" : "text"}
            onClick={() => nav("/manage/list")}
          >
            我的问卷
          </Button>
          <Button
            size="large"
            icon={<StarOutlined />}
            type={pathname.startsWith("/manage/star") ? "default" : "text"}
            onClick={() => nav("/manage/star")}
          >
            星标问卷
          </Button>
          <Button
            size="large"
            icon={<DeleteOutlined />}
            type={pathname.startsWith("/manage/trash") ? "default" : "text"}
            danger
            onClick={() => nav("/manage/trash")}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={Styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
