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
  },
});

export const { resetComponents, changeSelectedId } = componentsSlice.actions;

export default componentsSlice.reducer;
