import React, { FC, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Space, Button, Divider, message } from "antd";
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Styles from "./ManageLayout.module.scss";
import { createQuestionService } from "../services/question";

const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const handleCreateClick = async () => {
    setLoading(true);
    const data = await createQuestionService();
    const { id } = data || {};
    if (id) {
      nav(`/question/edit/${id}`);
      message.success("创建成功");
    }
    setLoading(false);
  };
  return (
    <div className={Styles.containerStyle}>
      <div className={Styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreateClick}
            size="large"
            disabled={loading}
          >
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
