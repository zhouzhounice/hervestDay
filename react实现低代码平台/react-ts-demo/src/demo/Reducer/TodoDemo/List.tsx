import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { del, TodoType } from "../store/todo";
import { StateType } from "../store";
const List: FC = () => {
  const todoList = useSelector<StateType>((state) => state.todo) as TodoType[];
  const dispatch = useDispatch();
  return (
    <ul>
      {todoList.map((item: TodoType) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => dispatch(del({ id: item.id }))}>删除</button>
        </li>
      ))}
    </ul>
  );
};
export default List;
