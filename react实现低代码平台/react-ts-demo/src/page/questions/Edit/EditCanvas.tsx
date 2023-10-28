import React, { FC } from "react";
import styles from "./canvas.module.scss";
import { Spin } from "antd";

import QuestionTitle from "../../../components/QuestionComponents/QuestionTitle/QuestionTitle";
import QuestionInput from "../../../components/QuestionComponents/QuestionInput/QuestionInput";

import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
// import { ComponentsInfoType } from "../../../store/componentsReducer";

type PropsType = {
  loading: boolean;
};
const EditCanvas: FC<PropsType> = ({ loading }) => {
  const componentList = useGetComponentInfo();

  console.log(componentList);
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Spin />
      </div>
    );
  }
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
