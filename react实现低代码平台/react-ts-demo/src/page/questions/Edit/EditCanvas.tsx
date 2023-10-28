import React, { FC } from "react";
import styles from "./canvas.module.scss";

import QuestionTitle from "../../../components/QuestionComponents/QuestionTitle/QuestionTitle";
import QuestionInput from "../../../components/QuestionComponents/QuestionInput/QuestionInput";
const EditCanvas: FC = () => {
  return (
    <div className={styles.canvas}>
      <div className={styles["component-wrapper"]}>
        <div className={styles.component}>
          <QuestionTitle isCenter={false} text={"标题"} level={2} />
        </div>
      </div>
      <div className={styles["component-wrapper"]}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
    </div>
  );
};

export default EditCanvas;
