import React, { FC } from "react";
import { Button, Space } from "antd";
import { LeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditHeader.module.scss";
import { updateQuestionService } from "../../../../services/question";
import { useRequest, useKeyPress } from "ahooks";
import EditToolbar from "./EditToolbar";
import HeaderTitle from "./HeaderTitle";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";
import useGetPageInfo from "../../../../hooks/useGetPageInfo";

const SaveButton: FC = () => {
  const { componentList } = useGetComponentInfo();
  const pageInfo = useGetPageInfo();
  const { id } = useParams();
  const { loading, run: save } = useRequest(
    async () => {
      if (!id) return;
      await updateQuestionService(id, { ...pageInfo, componentList });
    },
    { manual: true },
  );
  // 快捷键
  useKeyPress(["ctrl.s", "meta.s"], (event: KeyboardEvent) => {
    event.preventDefault();
    if (!loading) save();
  });
  return (
    <Button
      disabled={loading}
      onClick={save}
      icon={loading ? <LoadingOutlined /> : null}
    >
      保存
    </Button>
  );
};
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
            <SaveButton />
            <Button>发布</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;
