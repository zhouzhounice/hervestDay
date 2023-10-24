import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/todo";
import { nanoid } from "nanoid";
const Input: FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    setText("");
    dispatch(
      add({
        id: nanoid(5),
        title: text,
      }),
    );
  };
  return (
    <>
      <h4>新增todo</h4>
      <input value={text} onChange={handleChange} />
      <button onClick={handleClick}>新增</button>
    </>
  );
};
export default Input;
