import React, { FC } from "react";
import { Typography } from "antd";
import { QuestionInfoPropsType, QuestionInfoDefaultProps } from "./Interface";

const { Title, Paragraph } = Typography;
const QuestionInfo: FC<QuestionInfoPropsType> = (
  props: QuestionInfoPropsType,
) => {
  const { title = "", desc = "" } = { ...QuestionInfoDefaultProps, ...props };
  const textList = desc.split("\n");
  return (
    <div style={{ textAlign: "center" }}>
      <Title
        style={{
          fontSize: "24px",
          marginBottom: "0",
          marginTop: "0px",
        }}
      >
        {title}
      </Title>
      <Paragraph>
        {textList.map((item, index) => {
          return (
            <span key={index}>
              {index > 0 && <br />}
              {item}
            </span>
          );
        })}
      </Paragraph>
    </div>
  );
};

export default QuestionInfo;
