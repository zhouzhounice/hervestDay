import React, { FC } from "react";
import { useLoadQuestionData } from "../../../hooks/useLoadQuestionData";

const Edit: FC = () => {
  const { loading, questionData } = useLoadQuestionData();
  return (
    <div>
      <p>Edit page</p>
      <p>
        {loading ? (
          <span>loading...</span>
        ) : (
          <span>{JSON.stringify(questionData)}</span>
        )}
      </p>
    </div>
  );
};

export default Edit;
