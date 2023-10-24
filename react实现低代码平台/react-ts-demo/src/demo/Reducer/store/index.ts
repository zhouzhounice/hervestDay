import { configureStore } from "@reduxjs/toolkit";
import { TodoType } from "./todo";
import countReducer from "./count";
import todoReducer from "./todo";

export type StateType = {
  count: number;
  todo: TodoType[];
};
const store = configureStore({
  reducer: {
    count: countReducer,
    todo: todoReducer,
  },
});

export default store;
