import React, { FC, useContext } from "react";
import { TodoContext } from "./index";

const List: FC = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <ul>
      {state.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => dispatch({ type: "delete", param: item.id })}>
            删除
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
