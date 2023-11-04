import React, { FC, MouseEvent } from "react";
import styles from "./canvas.module.scss";
import { Spin } from "antd";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import { genComponentConfByType } from "../../../components/QuestionComponents";
import {
  ComponentsInfoType,
  changeSelectedId,
} from "../../../store/componentsReducer";

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
  const { componentList, selectedId } = useGetComponentInfo();
  const dispatch = useDispatch();
  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation();
    dispatch(changeSelectedId(id));
  };
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Spin />
      </div>
    );
  }
  return (
    <div className={styles.canvas}>
      {componentList
        .filter((i) => !i.isHidden)
        .map((item) => {
          const { fe_id, isLocked } = item;

          const wrapperDefaultClassName = styles["component-wrapper"];
          const selectedClassName = styles.selected;
          const lockedClassName = styles.locked;
          const wrapperClassName = classNames({
            [wrapperDefaultClassName]: true,
            [selectedClassName]: fe_id === selectedId,
            [lockedClassName]: isLocked,
          });
          return (
            <div
              key={fe_id}
              className={wrapperClassName}
              onClick={(e) => handleClick(e, fe_id)}
            >
              <div className={styles.component}>{genComponent(item)}</div>
            </div>
          );
        })}
    </div>
  );
};

export default EditCanvas;
