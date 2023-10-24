import React, { FC } from "react";
import List from "./List";
import Input from "./Input";
const TodoDemo: FC = () => {
  return (
    <>
      <h2>todoList demo</h2>
      <List />
      <Input />
    </>
  );
};

export default TodoDemo;
