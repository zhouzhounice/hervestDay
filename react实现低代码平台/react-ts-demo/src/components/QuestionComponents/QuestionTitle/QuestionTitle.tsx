import React, { FC } from "react";
import { Typography } from "antd";
import { QuestionTitlePropsType, QuestionTitleDefaultProps } from "./Interface";

const { Title } = Typography;
const QuestionTitle: FC<QuestionTitlePropsType> = (
  props: QuestionTitlePropsType,
) => {
  const {
    text = "",
    level = 1,
    isCenter = false,
  } = { ...QuestionTitleDefaultProps, ...props };

  const genFontSize = (level: number) => {
    switch (level) {
      case 1:
        return "28px";
      case 2:
        return "24px";
      case 3:
        return "20px";
      case 4:
        return "16px";
      case 5:
        return "12px";
      default:
        return "16px";
    }
  };

  return (
    <div>
      <Title
        level={level}
        style={{
          textAlign: isCenter ? "center" : "start",
          marginBottom: "0",
          fontSize: genFontSize(level),
          marginTop: "0px",
        }}
      >
        {text}
      </Title>
    </div>
  );
};

export default QuestionTitle;
