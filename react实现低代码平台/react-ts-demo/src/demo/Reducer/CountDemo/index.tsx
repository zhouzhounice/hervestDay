import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../store/count";
import type { StateType } from "../store";

const CountDemo: FC = () => {
  const count = useSelector<StateType>((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h2>
        count:<>{count}</>
      </h2>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </>
  );
};

export default CountDemo;
