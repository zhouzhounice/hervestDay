import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentPropsType } from "../../components/QuestionComponents";
import { getNextSelectedId } from "./utils";

export type ComponentsInfoType = {
  fe_id: string;
  type: string;
  title: string;
  isHidden?: boolean;
  isLocked?: boolean;
  props: ComponentPropsType;
};

export type ComponentStateType = {
  componentList: Array<ComponentsInfoType>;
  selectedId: string;
};

const INIT_STATE: ComponentStateType = {
  componentList: [],
  selectedId: "",
};

export const componentsSlice = createSlice({
  name: "components",
  initialState: INIT_STATE,
  reducers: {
    resetComponents: (
      state: ComponentStateType,
      action: PayloadAction<ComponentStateType>,
    ) => {
      return action.payload;
    },
    changeSelectedId: (
      state: ComponentStateType,
      action: PayloadAction<string>,
    ) => {
      return {
        ...state,
        selectedId: action.payload,
      };
    },
    // 添加新组件
    addComponent: (state, action) => {
      const newComponent = action.payload;
      const { selectedId, componentList } = state;

      const index = componentList.findIndex(
        (item) => item.fe_id === selectedId,
      );

      if (index < 0) {
        // 如果没有找到选中的组件，直接将新组件添加到末尾
        state.componentList.push(newComponent);
      } else {
        // 如果找到选中的组件，将新组件插入到选中组件的后面
        state.componentList.splice(index + 1, 0, newComponent);
      }

      state.selectedId = newComponent.fe_id;

      // 注意：不要返回一个新的状态对象，而是直接在传入的状态对象上进行修改
    },
    changeComponentProps: (
      state,
      action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>,
    ) => {
      const { fe_id, newProps } = action.payload;

      // 查找要修改属性的组件索引
      const compIndex = state.componentList.findIndex((c) => c.fe_id === fe_id);

      if (compIndex !== -1) {
        // 创建一个新的组件对象，将属性更新
        const updatedComponent = {
          ...state.componentList[compIndex],
          props: {
            ...state.componentList[compIndex].props,
            ...newProps,
          },
        };

        // 创建新的组件列表副本，并替换修改后的组件
        const newComponentList = [...state.componentList];
        newComponentList[compIndex] = updatedComponent;

        // 返回新的状态对象
        return {
          ...state,
          componentList: newComponentList,
        };
      }

      return state;
    },

    removeSelectedComponent: (state: ComponentStateType) => {
      const { componentList = [], selectedId: removeId } = state;
      const index = componentList.findIndex((i) => i.fe_id === removeId);
      // 重新计算selectId
      state.selectedId = getNextSelectedId(removeId, componentList);
      componentList.splice(index, 1);
    },

    changeComponentHidden: (
      state: ComponentStateType,
      action: PayloadAction<{ fe_id: string; isHidden: boolean }>,
    ) => {
      const { componentList } = state;
      const { fe_id, isHidden } = action.payload;
      if (isHidden) {
        // 重新计算selectId
        state.selectedId = getNextSelectedId(fe_id, componentList);
      } else {
        state.selectedId = fe_id;
      }

      state.componentList = componentList.map((i) => {
        if (i.fe_id === fe_id) {
          i.isHidden = isHidden;
        }
        return i;
      });
    },
    toggleComponentLocked: (
      state: ComponentStateType,
      action: PayloadAction<{ fe_id: string }>,
    ) => {
      const { fe_id } = action.payload;
      state.componentList.forEach((i) => {
        if (i.fe_id === fe_id) {
          i.isLocked = !i.isLocked;
        }
      });
    },
  },
});

export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponentProps,
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
} = componentsSlice.actions;

export default componentsSlice.reducer;
