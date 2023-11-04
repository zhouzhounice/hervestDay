import { useKeyPress } from "ahooks";
import { useDispatch } from "react-redux";
import {
  copySelectedComponent,
  pasteCopiesComponent,
  removeSelectedComponent,
} from "../store/componentsReducer";

const isActiveElementValid = () => {
  const activeElem = document.activeElement;
  if (activeElem === document.body) return true;
  return false;
};

const useBindCanvasKeyPress = () => {
  const dispatch = useDispatch();
  // 删除
  useKeyPress(["backspace", "delete"], () => {
    if (!isActiveElementValid()) return;
    dispatch(removeSelectedComponent());
  });
  // 复制
  useKeyPress(["ctrl.c", "meta.c"], () => {
    if (!isActiveElementValid()) return;
    dispatch(copySelectedComponent());
  });
  // 粘贴
  useKeyPress(["ctrl.v", "meta.v"], () => {
    if (!isActiveElementValid()) return;
    dispatch(pasteCopiesComponent());
  });
};

export default useBindCanvasKeyPress;
