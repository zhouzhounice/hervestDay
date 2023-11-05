import React, { ChangeEvent, FC, useState } from "react";
import { Button, Input, message, Space } from "antd";
import { EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";
import styles from "./Layers.module.scss";
import {
  changeComponentHidden,
  changeComponentTitle,
  changeSelectedId,
  toggleComponentLocked,
  moveComponent,
} from "../../../../store/componentsReducer";
import SortableContainer from "../../../../components/DragSortable/SortableContainer";
import SortableItem from "../../../../components/DragSortable/SortableItem";

const Layers: FC = () => {
  const { componentList, selectedId } = useGetComponentInfo();
  const dispatch = useDispatch();
  const [changingTitleId, setChangingTitleId] = useState("");
  const handleTitleClick = (id: string) => {
    const curComp = componentList.find((i) => i.fe_id === id);
    if (curComp && curComp.isHidden) {
      message.info("不能选中隐藏组件");
      return;
    }
    if (selectedId !== id) {
      dispatch(changeSelectedId(id));
      setChangingTitleId("");
      return;
    }
    setChangingTitleId(id);
  };
  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value.trim();
    if (!newTitle) return;
    if (!selectedId) return;
    dispatch(changeComponentTitle({ fe_id: selectedId, newTitle }));
  };
  const changeIsHidden = (id: string, isHidden: boolean) => {
    dispatch(changeComponentHidden({ fe_id: id, isHidden }));
  };
  const changeIsLock = (id: string) => {
    dispatch(toggleComponentLocked({ fe_id: id }));
  };
  // SortableContainer 组件的 items 属性，需要每个 item 都有 id
  const componentListWithId = componentList.map((c) => {
    return { ...c, id: c.fe_id };
  });
  // 拖拽排序结束
  function handleDragEnd(oldIndex: number, newIndex: number) {
    dispatch(moveComponent({ oldIndex, newIndex }));
  }
  return (
    <SortableContainer items={componentListWithId} onDragEnd={handleDragEnd}>
      {componentList.map((c) => {
        const { fe_id, title, isHidden, isLocked } = c;

        // 拼接 title className
        const titleDefaultClassName = styles.title;
        const selectedClassName = styles.selected;
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        });

        return (
          <SortableItem key={fe_id} id={fe_id}>
            <div className={styles.wrapper}>
              <div
                className={titleClassName}
                onClick={() => handleTitleClick(fe_id)}
              >
                {fe_id === changingTitleId && (
                  <Input
                    value={title}
                    onChange={handleTitle}
                    onPressEnter={() => setChangingTitleId("")}
                    onBlur={() => setChangingTitleId("")}
                  />
                )}
                {fe_id !== changingTitleId && title}
              </div>
              <div className={styles.handler}>
                <Space>
                  <Button
                    size="small"
                    shape="circle"
                    className={!isHidden ? styles.btn : ""}
                    icon={<EyeInvisibleOutlined />}
                    type={isHidden ? "primary" : "text"}
                    onClick={() => changeIsHidden(fe_id, !isHidden)}
                  />
                  <Button
                    size="small"
                    shape="circle"
                    className={!isLocked ? styles.btn : ""}
                    icon={<LockOutlined />}
                    type={isLocked ? "primary" : "text"}
                    onClick={() => changeIsLock(fe_id)}
                  />
                </Space>
              </div>
            </div>
          </SortableItem>
        );
      })}
    </SortableContainer>
  );
};

export default Layers;
