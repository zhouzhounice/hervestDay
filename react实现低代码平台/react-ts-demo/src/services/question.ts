import axios from "./index";
import type { ResDataType, SearchOption } from "./common";

export async function getQuestionService(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`;
  return (await axios.get(url)) as ResDataType;
}

export async function createQuestionService(): Promise<ResDataType> {
  const url = "/api/question";
  return (await axios.post(url)) as ResDataType;
}

export async function getQuestionListService(
  opt?: Partial<SearchOption>,
): Promise<ResDataType> {
  const url = "/api/question";
  return (await axios.get(url, { params: opt })) as ResDataType;
}

export async function updateQuestionService(
  id: string,
  opt: { [key: string]: unknown },
): Promise<ResDataType> {
  const url = `/api/question/${id}`;
  return (await axios.patch(url, opt)) as ResDataType;
}

export async function duplicateQuestionService(
  id: string,
): Promise<ResDataType> {
  const url = `/api/question/duplicate/${id}`;
  return (await axios.post(url)) as ResDataType;
}

export async function deleteQuestionService(
  ids: string[],
): Promise<ResDataType> {
  const url = `/api/question`;
  return (await axios.delete(url, { data: { ids } })) as ResDataType;
}
