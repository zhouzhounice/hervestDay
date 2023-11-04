import { ComponentsInfoType, ComponentStateType } from "./index";

export const getNextSelectedId = (
  fe_id: string,
  componentList: ComponentsInfoType[],
): string => {
  const visibleComponentList = componentList.filter((i) => !i.isHidden);
  const index = visibleComponentList.findIndex((i) => i.fe_id === fe_id);
  if (index < 0) return "";
  // 重新计算 selectedId
  let newSelectedId: string;
  const length = visibleComponentList.length;
  if (length <= 1) {
    newSelectedId = "";
  } else {
    if (index + 1 === length) {
      // 要删除最后一个
      newSelectedId = visibleComponentList[index - 1].fe_id;
    } else {
      newSelectedId = visibleComponentList[index + 1].fe_id;
    }
  }
  return newSelectedId;
};

export const insertNewComponent = (
  state: ComponentStateType,
  newComponent: ComponentsInfoType,
) => {
  const { selectedId, componentList } = state;
  const index = componentList.findIndex((i) => i.fe_id === selectedId);

  if (index < 0) {
    state.componentList.push(newComponent);
  } else {
    state.componentList.splice(index + 1, 0, newComponent);
  }
  state.selectedId = newComponent.fe_id;
};
