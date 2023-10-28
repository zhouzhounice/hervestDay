import React, { FC } from "react";
import styles from "./canvas.module.scss";
import { Spin } from "antd";

import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import { genComponentConfByType } from "../../../components/QuestionComponents";
import { ComponentsInfoType } from "../../../store/componentsReducer";

type PropsType = {
  loading: boolean;
};

function genComponent(componentInfo: ComponentsInfoType) {
  const { type, props } = componentInfo;
  const componentConf = genComponentConfByType(type);
  if (componentConf == null) return null;
  const { Component } = componentConf;
  return <Component {...props} />;
}
const EditCanvas: FC<PropsType> = ({ loading }) => {
  const { componentList } = useGetComponentInfo();

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
      {componentList.map((item) => {
        const { fe_id } = item;
        return (
          <div key={fe_id} className={styles["component-wrapper"]}>
            <div className={styles.component}>{genComponent(item)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EditCanvas;
