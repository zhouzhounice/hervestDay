import QuestionInfo from "./QuestionInfo";
import { QuestionInfoDefaultProps } from "./Interface";
import PropComponent from "./PropComponent";

export * from "./Interface";

export default {
  title: "标题",
  type: "questionInfo",
  Component: QuestionInfo,
  defaultProps: QuestionInfoDefaultProps,
  PropComponent,
};
