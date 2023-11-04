import QuestionTextarea from "./QuestionTextarea";
import { QuestionTextareaDefaultProps } from "./Interface";
import PropComponent from "./PropComponent";

export * from "./Interface";

export default {
  title: "输入框",
  type: "questionTextarea",
  Component: QuestionTextarea,
  PropComponent,
  defaultProps: QuestionTextareaDefaultProps,
};
