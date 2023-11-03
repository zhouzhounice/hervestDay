import React, { FC } from "react";
import { Button, Space, Tooltip } from "antd";
import { DeleteOutlined, EyeInvisibleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  removeSelectedComponent,
  changeComponentHidden,
} from "../../../../store/componentsReducer";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";
const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId } = useGetComponentInfo();
  const handleDel = () => {
    dispatch(removeSelectedComponent());
  };
  const handleHidden = () => {
    dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: true }));
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
      <Button shape="circle" icon={<DeleteOutlined />}></Button>
      <Button shape="circle" icon={<DeleteOutlined />}></Button>
    </Space>
  );
};

export default EditToolbar;
