import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import userLoadUserData from "../hooks/userLoadUserData";

const QuestionLayout: FC = () => {
  const { waitingUserData } = userLoadUserData();
  return (
    <>
      <div>{!waitingUserData && <Outlet />}</div>
    </>
  );
};

export default QuestionLayout;
