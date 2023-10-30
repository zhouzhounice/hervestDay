import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentPropsType } from "../../components/QuestionComponents";

export type ComponentsInfoType = {
  fe_id: string;
  type: string;
  title: string;
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
  },
});

export const { resetComponents, changeSelectedId, addComponent } =
  componentsSlice.actions;

export default componentsSlice.reducer;
