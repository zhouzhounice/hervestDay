import React, { FC } from "react";
import { Button, Result, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
import useGetPageInfo from "../../../hooks/useGetPageInfo";

const Stat: FC = () => {
  const { loading } = useLoadQuestionData();
  const { isPublished } = useGetPageInfo();
  const nav = useNavigate();

  if (!isPublished) {
    return (
      <Result
        status="warning"
        title="该页面尚未发布！"
        extra={
          <Button type="primary" onClick={() => nav(-1)}>
            返回
          </Button>
        }
      />
    );
  }
  return (
    <div>
      <Spin spinning={loading}>Stat</Spin>
    </div>
  );
};

export default Stat;
