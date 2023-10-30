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
  PropComponent: FC<ComponentPropsType>;
};

const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
];

export const componentConfGroup = [
  {
    groupName: "文本显示",
    components: [QuestionTitleConf],
    groupId: "text",
  },
  {
    groupName: "用户输入",
    components: [QuestionInputConf],
    groupId: "input",
  },
];

// 全部的组件

export function genComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type);
}
