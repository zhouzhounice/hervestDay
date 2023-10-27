import React, { FC } from "react";
import { useLoadQuestionData } from "../../../hooks/useLoadQuestionData";
import styles from "./index.module.scss";

const Edit: FC = () => {
  const { loading, questionData } = useLoadQuestionData();
  return (
    <div className={styles.container}>
      <div className={styles.header}>Header</div>
      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>Left</div>
          <div className={styles.main}>
            <div className={styles["canvas-wrapper"]}>
              <div style={{ height: "2000px" }}>画布。测试滚动</div>
            </div>
          </div>
          <div className={styles.right}>Right</div>
        </div>
      </div>
      <p>
        {loading ? (
          <span>loading...</span>
        ) : (
          <span>{JSON.stringify(questionData)}</span>
        )}
      </p>
    </div>
  );
};

export default Edit;
