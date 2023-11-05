import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserStateType } from "./userReducer";
import componentsReducer, { ComponentStateType } from "./componentsReducer";
import pageInfoReducer, { PageInfoType } from "./pageInfoReducer";

export type StateType = {
  user: UserStateType;
  components: ComponentStateType;
  pageInfo: PageInfoType;
};
export default configureStore({
  reducer: {
    user: userReducer,
    components: componentsReducer,
    pageInfo: pageInfoReducer,
  },
});
