// 定义原始数据
import { nanoid } from "nanoid";
export type TodoType = {
  id: string;
  title: string;
};

export const initialState: TodoType[] = [
  {
    id: nanoid(5),
    title: "吃饭",
  },
  {
    id: nanoid(5),
    title: "睡觉",
  },
];
