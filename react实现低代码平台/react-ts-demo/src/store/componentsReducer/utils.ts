import { ComponentsInfoType } from "./index";

export const getNextSelectedId = (
  fe_id: string,
  componentList: ComponentsInfoType[],
): string => {
  const index = componentList.findIndex((i) => i.fe_id === fe_id);
  if (index < 0) return "";
  // 重新计算 selectedId
  let newSelectedId: string;
  const length = componentList.length;
  if (length <= 1) {
    newSelectedId = "";
  } else {
    if (index + 1 === length) {
      // 要删除最后一个
      newSelectedId = componentList[index - 1].fe_id;
    } else {
      newSelectedId = componentList[index + 1].fe_id;
    }
  }
  return newSelectedId;
};
