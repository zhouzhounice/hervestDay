import axios, { ResDataType } from "./index";

export async function getQuestionService(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`;
  return (await axios.get(url)) as ResDataType;
}

export async function createQuestionService(): Promise<ResDataType> {
  const url = "/api/question";
  const data = (await axios.post(url)) as ResDataType;
  return data;
}
