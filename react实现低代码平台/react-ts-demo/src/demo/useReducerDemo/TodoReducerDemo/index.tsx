import React, { FC, createContext, useReducer } from "react";
import { initialState } from "./store";
import { reducer, ActionType } from "./reducer";
import List from "./List";
import Input from "./Input";
export const TodoContext = createContext({
  state: initialState,
  dispatch: (action: ActionType) => {
    console.log(action);
  },
});
const TodoDemo: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <>
        <h2>todoList demo</h2>
        <List />
        <Input />
      </>
    </TodoContext.Provider>
  );
};

export default TodoDemo;
