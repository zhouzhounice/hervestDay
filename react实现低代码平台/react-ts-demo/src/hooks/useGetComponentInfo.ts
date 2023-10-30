import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsInfoType } from "../store/componentsReducer";

function useGetComponentInfo(): {
  componentList: ComponentsInfoType[];
  selectedId: string;
  selectedComponent: ComponentsInfoType | undefined;
} {
  const components = useSelector<StateType>((state) => state.components);
  const { componentList = [], selectedId = "" } = components as {
    componentList: ComponentsInfoType[];
    selectedId: string;
  };
  const selectedComponent = componentList.find(
    (item) => item.fe_id === selectedId,
  );
  return { componentList, selectedId, selectedComponent };
}
export default useGetComponentInfo;
