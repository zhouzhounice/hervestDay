import React, { useState, FC } from "react";

const CountDemo: FC = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={add}>count {count}</button>
    </>
  );
};

export default CountDemo;
