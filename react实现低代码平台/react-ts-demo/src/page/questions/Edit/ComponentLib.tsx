import React, { FC } from "react";
import { Typography } from "antd";
import {
  componentConfGroup,
  ComponentConfType,
} from "../../../components/QuestionComponents";
import styles from "./ComponentLib.module.scss";

const { Title } = Typography;
const ComponentLib: FC = () => {
  const genComponent = (c: ComponentConfType) => {
    const { Component } = c;
    return (
      <div className={styles.wrapper}>
        <div className={styles.component}>
          <Component />
        </div>
      </div>
    );
  };
  return (
    <>
      {componentConfGroup.map((item, index) => (
        <div key={item.groupId}>
          <Title
            level={5}
            style={{ fontSize: "14px", marginTop: index > 0 ? "20px" : "0px" }}
          >
            {item.groupName}
          </Title>
          <div>
            {item.components.map((item: ComponentConfType) =>
              genComponent(item),
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ComponentLib;
