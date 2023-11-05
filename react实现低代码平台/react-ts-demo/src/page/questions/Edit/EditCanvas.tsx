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
  moveComponent,
} from "../../../store/componentsReducer";
import useBindCanvasKeyPress from "../../../hooks/useBindCanvasKeyPress";
import SortableContainer from "../../../components/DragSortable/SortableContainer";
import SortableItem from "../../../components/DragSortable/SortableItem";

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
  // 绑定快捷键
  useBindCanvasKeyPress();
  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation();
    dispatch(changeSelectedId(id));
  };
  // SortableContainer 组件的 items 属性，需要每个 item 都有 id
  const componentListWithId = componentList.map((c) => {
    return { ...c, id: c.fe_id };
  });
  function handleDragEnd(oldIndex: number, newIndex: number) {
    dispatch(moveComponent({ oldIndex, newIndex }));
  }
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Spin />
      </div>
    );
  }
  return (
    <SortableContainer items={componentListWithId} onDragEnd={handleDragEnd}>
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
              <SortableItem key={fe_id} id={fe_id}>
                <div
                  key={fe_id}
                  className={wrapperClassName}
                  onClick={(e) => handleClick(e, fe_id)}
                >
                  <div className={styles.component}>{genComponent(item)}</div>
                </div>
              </SortableItem>
            );
          })}
      </div>
    </SortableContainer>
  );
};

export default EditCanvas;
