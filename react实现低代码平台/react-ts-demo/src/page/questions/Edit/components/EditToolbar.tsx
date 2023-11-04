import React, { FC } from "react";
import { Button, Space, Tooltip } from "antd";
import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  EyeInvisibleFilled,
  LockOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedComponent,
  pasteCopiesComponent,
} from "../../../../store/componentsReducer";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, selectedComponent, copiesComponent } =
    useGetComponentInfo();
  const { isLocked } = selectedComponent || {};
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
    </Space>
  );
};

export default EditToolbar;
