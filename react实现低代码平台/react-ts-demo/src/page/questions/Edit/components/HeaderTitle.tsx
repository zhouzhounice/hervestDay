import React, { ChangeEvent, FC, useState } from "react";
import { Typography, Space, Button, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import useGetPageInfo from "../../../../hooks/useGetPageInfo";
import { changeTitle } from "../../../../store/pageInfoReducer";

const { Title } = Typography;

const HeaderTitle: FC = () => {
  const { title } = useGetPageInfo();
  const dispatch = useDispatch();
  const [editState, setEditState] = useState<boolean>(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value.trim();
    if (!newTitle) return;
    dispatch(changeTitle(newTitle));
  };

  if (editState)
    return (
      <Input
        value={title}
        onChange={handleChange}
        onPressEnter={() => setEditState(false)}
        onBlur={() => setEditState(false)}
      />
    );

  return (
    <Space>
      <Title style={{ marginTop: "0px" }}>{title}</Title>
      <Button
        icon={<EditOutlined />}
        type="text"
        onClick={() => setEditState(true)}
        shape="circle"
      />
    </Space>
  );
};

export default HeaderTitle;
