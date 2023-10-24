import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE: number = 100;

export const contSlice = createSlice({
  name: "count",
  initialState: INIT_STATE,
  reducers: {
    increase(state: number) {
      return state + 1;
    },
    decrease(state: number) {
      return state - 1;
    },
  },
});

export const { increase, decrease } = contSlice.actions;
export default contSlice.reducer;
