import React, { FC } from "react";
import { Button, Space, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeSelectedComponent } from "../../../../store/componentsReducer";
const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const handleDel = () => {
    dispatch(removeSelectedComponent());
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
      <Button shape="circle" icon={<DeleteOutlined />}></Button>
      <Button shape="circle" icon={<DeleteOutlined />}></Button>
      <Button shape="circle" icon={<DeleteOutlined />}></Button>
    </Space>
  );
};

export default EditToolbar;
