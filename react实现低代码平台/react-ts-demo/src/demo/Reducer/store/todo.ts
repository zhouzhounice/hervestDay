import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export type TodoType = {
  id: string;
  title: string;
};
const INIT_STATE: TodoType[] = [
  {
    id: nanoid(5),
    title: "吃饭",
  },
  {
    id: nanoid(5),
    title: "睡觉",
  },
];
export const todoSlice = createSlice({
  name: "todo",
  initialState: INIT_STATE,
  reducers: {
    add(state: TodoType[], action: PayloadAction<TodoType>) {
      return [action.payload, ...state];
    },
    delete(state: TodoType[], action: PayloadAction<{ id: string }>) {
      return state.filter((item) => action.payload.id !== item.id);
    },
  },
});
export const add = todoSlice.actions.add;
export const del = todoSlice.actions.delete;
export default todoSlice.reducer;
