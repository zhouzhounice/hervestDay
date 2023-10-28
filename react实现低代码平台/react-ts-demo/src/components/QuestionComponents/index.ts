import type { FC } from "react";
import QuestionInputConf, { QuestionInputPropsType } from "./QuestionInput";
import QuestionTitleConf, { QuestionTitlePropsType } from "./QuestionTitle";

export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType;

export type ComponentConfType = {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
};

const componentConfList: ComponentConfType[] = [
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  QuestionInputConf,
  QuestionTitleConf,
];

export function genComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type);
}
