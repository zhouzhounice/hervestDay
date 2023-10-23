import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Space, Button, Divider } from "antd";
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Styles from "./ManageLayout.module.scss";

const ManageLayout: FC = () => {
  return (
    <div className={Styles.containerStyle}>
      <div className={Styles.left}>
        <Space direction="vertical">
          <Button type="primary" icon={<PlusOutlined />} size="large">
            创建问卷
          </Button>
          <Divider />
          <Button size="large" icon={<UnorderedListOutlined />}>
            我的问卷
          </Button>
          <Button size="large" icon={<StarOutlined />}>
            星标问卷
          </Button>
          <Button size="large">回收站</Button>
        </Space>
      </div>
      <div className={Styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
