import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../../../services/question";

const Edit: FC = () => {
  const { id = "" } = useParams();
  const [loading, setLoading] = useState(true);
  const [questionData, setQuestionData] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getQuestionService(id);
      setQuestionData(data);
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      <p>Edit page</p>
      <p>
        {loading ? <p>loading...</p> : <p>{JSON.stringify(questionData)}</p>}
      </p>
    </div>
  );
};

export default Edit;
