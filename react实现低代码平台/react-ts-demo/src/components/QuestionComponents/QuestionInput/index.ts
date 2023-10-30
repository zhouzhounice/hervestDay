import QuestionInput from "./QuestionInput";
import { QuestionInputDefaultProps } from "./Interface";
import PropComponent from "./PropComponent";

export * from "./Interface";

export default {
  title: "输入框",
  type: "questionInput",
  Component: QuestionInput,
  PropComponent,
  defaultProps: QuestionInputDefaultProps,
};
