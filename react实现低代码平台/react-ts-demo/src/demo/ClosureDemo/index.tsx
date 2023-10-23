import React, { useState, useEffect, useRef, FC } from "react";

const ClosureDemo: FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number | null>(null);
  useEffect(() => {
    countRef.current = count;
  }, [count]);
  const addCount = () => {
    setCount(count + 1);
  };
  const alertCount = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 1000);
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={addCount}>add count</button>
      <button onClick={alertCount}>alter</button>
    </>
  );
};

export default ClosureDemo;
