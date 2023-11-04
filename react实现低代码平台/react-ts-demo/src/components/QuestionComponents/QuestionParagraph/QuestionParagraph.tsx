import React, { FC } from "react";
import { Typography } from "antd";
import {
  QuestionParagraphPropsType,
  QuestionParagraphDefaultProps,
} from "./Interface";

const { Paragraph } = Typography;
const QuestionParagraph: FC<QuestionParagraphPropsType> = (
  props: QuestionParagraphPropsType,
) => {
  const { text = "", isCenter = false } = {
    ...QuestionParagraphDefaultProps,
    ...props,
  };
  const textList = text.split("\n");
  return (
    <div>
      <Paragraph
        style={{
          textAlign: isCenter ? "center" : "start",
          marginBottom: "0",
          marginTop: "0px",
        }}
      >
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

export default QuestionParagraph;
