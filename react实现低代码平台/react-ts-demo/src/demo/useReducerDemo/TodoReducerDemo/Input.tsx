import React, { ChangeEvent, FC, useContext, useState } from "react";
import { TodoContext } from "./index";
import { nanoid } from "nanoid";

const Input: FC = () => {
  const [text, setText] = useState("");
  const { state, dispatch } = useContext(TodoContext);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleAdd = () => {
    dispatch({ type: "add", param: { id: nanoid(5), title: text } });
    setText("");
  };
  return (
    <>
      <p>新增todo</p>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAdd}>新增{state.length}</button>
    </>
  );
};

export default Input;
