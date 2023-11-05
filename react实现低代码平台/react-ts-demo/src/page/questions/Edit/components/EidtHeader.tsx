import React, { FC } from "react";
import { Button, Space } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./EditHeader.module.scss";
import EditToolbar from "./EditToolbar";
import HeaderTitle from "./HeaderTitle";
const EditHeader: FC = () => {
  const nav = useNavigate();
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
            返回
          </Button>
          <HeaderTitle />
        </div>
        <div className={styles.main}>
          <EditToolbar></EditToolbar>
        </div>
        <div className={styles.right}>
          <Space>
            <Button>保存</Button>
            <Button>发布</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;
