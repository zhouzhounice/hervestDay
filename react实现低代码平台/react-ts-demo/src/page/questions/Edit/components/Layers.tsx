import React, { ChangeEvent, FC, useState } from "react";
import { Button, Input, List, message, Space } from "antd";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";
import styles from "./Layers.module.scss";
import {
  changeComponentHidden,
  changeComponentTitle,
  changeSelectedId,
  toggleComponentLocked,
} from "../../../../store/componentsReducer";
import { EyeInvisibleFilled, LockOutlined } from "@ant-design/icons";

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
  return (
    <List
      bordered
      dataSource={componentList}
      renderItem={(item) => {
        const { fe_id, title, isHidden, isLocked } = item;
        const titleDefaultClassName = styles.title;
        const selectedClassName = styles.selected;
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        });

        return (
          <List.Item key={fe_id} className={styles.wrapper}>
            <div
              className={titleClassName}
              onClick={() => handleTitleClick(fe_id)}
            >
              {fe_id === changingTitleId ? (
                <Input
                  value={title}
                  onChange={handleTitle}
                  onPressEnter={() => setChangingTitleId("")}
                  onBlur={() => setChangingTitleId("")}
                />
              ) : (
                title
              )}
            </div>
            <div className={styles.handler}>
              <Space>
                <Button
                  size="small"
                  shape="circle"
                  className={styles.btn}
                  icon={<EyeInvisibleFilled />}
                  type={isHidden ? "primary" : "text"}
                  onClick={() => changeIsHidden(fe_id, !isHidden)}
                />
                <Button
                  size="small"
                  shape="circle"
                  className={styles.btn}
                  icon={<LockOutlined />}
                  type={isLocked ? "primary" : "text"}
                  onClick={() => changeIsLock(fe_id)}
                />
              </Space>
            </div>
          </List.Item>
        );
      }}
    />
  );
};

export default Layers;
