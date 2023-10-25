import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getQuestionService } from "../services/question";

export const useLoadQuestionData = () => {
  const { id = "" } = useParams();

  const getQuestionData = async () => {
    return await getQuestionService(id);
  };
  const { loading, data: questionData } = useRequest(getQuestionData);

  return { loading, questionData };
};
