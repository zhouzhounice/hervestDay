import QuestionParagraph from "./QuestionParagraph";
import { QuestionParagraphDefaultProps } from "./Interface";
import PropComponent from "./PropComponent";

export * from "./Interface";

export default {
  title: "段落",
  type: "questionParagraph",
  Component: QuestionParagraph,
  defaultProps: QuestionParagraphDefaultProps,
  PropComponent,
};
