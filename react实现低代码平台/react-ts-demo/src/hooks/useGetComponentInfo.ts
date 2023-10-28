import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsInfoType } from "../store/componentsReducer";

function useGetComponentInfo(): {
  componentList: ComponentsInfoType[];
  selectedId: string;
} {
  const components = useSelector<StateType>((state) => state.components);
  const { componentList = [], selectedId = "" } = components as {
    componentList: ComponentsInfoType[];
    selectedId: string;
  };

  return { componentList, selectedId };
}
export default useGetComponentInfo;
