import React, { FC, useReducer } from "react";

type StateType = {
  count: number;
};
type ActionType = {
  type: string;
};
const initialState: StateType = {
  count: 100,
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
const ReducerDemo: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
    </>
  );
};

export default ReducerDemo;
