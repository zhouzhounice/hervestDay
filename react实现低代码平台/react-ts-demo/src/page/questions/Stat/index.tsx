import React, { FC } from "react";
import { Button, Result, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import styles from "./index.module.scss";
import StatHeader from "./StatHeader";

const Stat: FC = () => {
  const { loading } = useLoadQuestionData();
  const { isPublished } = useGetPageInfo();
  const nav = useNavigate();

  const genContentElem = () => {
    if (typeof isPublished === "boolean" && !isPublished) {
      return (
        <div style={{ flex: "1" }}>
          <Result
            status="warning"
            title="该页面尚未发布！"
            extra={
              <Button type="primary" onClick={() => nav(-1)}>
                返回
              </Button>
            }
          />
        </div>
      );
    }
    return (
      <>
        <div className={styles.left}>左侧</div>
        <div className={styles.main}>中间</div>
        <div className={styles.right}>右侧</div>
      </>
    );
  };
  return (
    <div className={styles.container}>
      <StatHeader />
      <div className={styles["content-wrapper"]}>
        {loading && <Spin />}
        {!loading && <div className={styles.content}>{genContentElem()}</div>}
      </div>
    </div>
  );
};

export default Stat;
