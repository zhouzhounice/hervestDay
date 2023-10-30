import QuestionTitle from "./QuestionTitle";
import { QuestionTitleDefaultProps } from "./Interface";
import PropsComponent from "./PropComponent";

export * from "./Interface";

export default {
  title: "标题",
  type: "questionTitle",
  Component: QuestionTitle,
  defaultProps: QuestionTitleDefaultProps,
  PropsComponent,
};
