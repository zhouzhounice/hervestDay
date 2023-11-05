import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserStateType } from "./userReducer";
import undoable, { excludeAction, StateWithHistory } from "redux-undo";
import componentsReducer, { ComponentStateType } from "./componentsReducer";
import pageInfoReducer, { PageInfoType } from "./pageInfoReducer";

export type StateType = {
  user: UserStateType;
  // components: ComponentStateType;
  components: StateWithHistory<ComponentStateType>;
  pageInfo: PageInfoType;
};
export default configureStore({
  reducer: {
    user: userReducer,
    // components: componentsReducer,
    // 增加了 undo
    components: undoable(componentsReducer, {
      limit: 20, // 限制 undo 20 步
      filter: excludeAction([
        "components/resetComponents",
        "components/changeSelectedId",
        "components/selectPrevComponent",
        "components/selectNextComponent",
      ]),
    }),
    pageInfo: pageInfoReducer,
  },
});
