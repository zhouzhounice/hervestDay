import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import {
  LIST_SEARCH_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_SIZE,
} from "../constant";
import { getQuestionListService } from "../services/question";

export type OptionType = {
  isStar: boolean;
  isDelete: boolean;
};

export const useLoadQuesList = (opt: Partial<OptionType> = {}) => {
  const { isStar, isDelete } = opt;
  const [searchParam] = useSearchParams();
  const { data, loading, refresh } = useRequest(
    async () => {
      const keyword = searchParam.get(LIST_SEARCH_PARAM_KEY) || "";
      const page = parseInt(searchParam.get(LIST_PAGE_PARAM_KEY) || "") || 1;
      const pageSize =
        parseInt(searchParam.get(LIST_PAGE_SIZE_PARAM_KEY) || "") ||
        LIST_PAGE_SIZE;
      return await getQuestionListService({
        keyword,
        isStar,
        isDelete,
        page,
        pageSize,
      });
    },
    {
      refreshDeps: [searchParam],
    },
  );
  return { data, loading, refresh };
};

export default useLoadQuesList;
