import { useKeyPress } from "ahooks";
import { useDispatch } from "react-redux";
import {
  copySelectedComponent,
  pasteCopiesComponent,
  removeSelectedComponent,
  selectPrevComponent,
  selectNextComponent,
} from "../store/componentsReducer";

const isActiveElementValid = () => {
  const activeElem = document.activeElement;
  return activeElem === document.body;
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
  // 选中上一个
  useKeyPress(["uparrow"], () => {
    if (!isActiveElementValid()) return;
    dispatch(selectPrevComponent());
  });
  // 选中下一个
  useKeyPress(["downarrow"], () => {
    if (!isActiveElementValid()) return;
    dispatch(selectNextComponent());
  });
};

export default useBindCanvasKeyPress;
