import React, { FC } from "react";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import {
  componentConfGroup,
  ComponentConfType,
} from "../../../components/QuestionComponents";
import { addComponent } from "../../../store/componentsReducer";
import styles from "./ComponentLib.module.scss";

const { Title } = Typography;

const genComponent = (c: ComponentConfType) => {
  const { Component, title, type, defaultProps } = c;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addComponent({
        fe_id: nanoid(),
        title,
        type,
        props: defaultProps,
      }),
    );
  };
  return (
    <div key={nanoid()} className={styles.wrapper} onClick={handleClick}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  );
};
const ComponentLib: FC = () => {
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
