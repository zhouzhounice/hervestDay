import React, { FC } from "react";
import { Button, Space, Tooltip } from "antd";
import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownOutlined,
  EyeInvisibleFilled,
  LockOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedComponent,
  pasteCopiesComponent,
  moveComponent,
} from "../../../../store/componentsReducer";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, componentList, selectedComponent, copiesComponent } =
    useGetComponentInfo();
  const { isLocked } = selectedComponent || {};
  const selectedIndex = componentList.findIndex((c) => c.fe_id === selectedId);
  const isFirst = selectedIndex <= 0; // 第一个
  const isLast = selectedIndex + 1 >= componentList.length; // 最后一个
  const handleDel = () => {
    dispatch(removeSelectedComponent());
  };
  const handleHidden = () => {
    dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: true }));
  };

  const handleLocked = () => {
    dispatch(toggleComponentLocked({ fe_id: selectedId }));
  };

  const handleCopy = () => {
    dispatch(copySelectedComponent());
  };

  const handlePaste = () => {
    dispatch(pasteCopiesComponent());
  };
  // 上移
  function moveUp() {
    if (isFirst) return;
    dispatch(
      moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex - 1 }),
    );
  }

  // 下移
  function moveDown() {
    if (isLast) return;
    dispatch(
      moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex + 1 }),
    );
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={handleDel}
        ></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          shape="circle"
          icon={<EyeInvisibleFilled />}
          onClick={handleHidden}
        ></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button
          type={isLocked ? "primary" : "default"}
          shape="circle"
          icon={<LockOutlined />}
          onClick={handleLocked}
        ></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button
          shape="circle"
          icon={<CopyOutlined />}
          onClick={handleCopy}
        ></Button>
      </Tooltip>
      <Tooltip title="粘贴">
        <Button
          shape="circle"
          icon={<BlockOutlined />}
          disabled={!copiesComponent}
          onClick={handlePaste}
        ></Button>
      </Tooltip>
      <Tooltip title="上移">
        <Button
          shape="circle"
          icon={<UpOutlined />}
          onClick={moveUp}
          disabled={isFirst}
        ></Button>
      </Tooltip>
      <Tooltip title="下移">
        <Button
          shape="circle"
          icon={<DownOutlined />}
          onClick={moveDown}
          disabled={isLast}
        ></Button>
      </Tooltip>
    </Space>
  );
};

export default EditToolbar;
