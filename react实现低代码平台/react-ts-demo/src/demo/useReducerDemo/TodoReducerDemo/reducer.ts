import { TodoType } from "./store";
export type ActionType = {
  type: string;
  param?: TodoType | string;
};

export function reducer(state: TodoType[], action: ActionType) {
  switch (action.type) {
    case "add":
      if (typeof action.param === "string") {
        // 处理字符串参数，或者选择其他合适的处理方式
        return state;
      } else {
        return state.concat(action.param as TodoType);
      }
    case "delete":
      return state.filter((item) => item.id !== action.param);
    default:
      throw new Error();
  }
}
