import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsInfoType } from "../store/componentsReducer";

function useGetComponentInfo(): {
  componentList: ComponentsInfoType[];
  selectedId: string;
  selectedComponent: ComponentsInfoType | undefined;
  copiesComponent: ComponentsInfoType | undefined;
} {
  const components = useSelector<StateType>(
    (state) => state.components.present,
  );
  const {
    componentList = [],
    selectedId = "",
    copiesComponent = undefined,
  } = components as {
    componentList: ComponentsInfoType[];
    selectedId: string;
    copiesComponent: ComponentsInfoType | undefined;
  };
  const selectedComponent = componentList.find(
    (item) => item.fe_id === selectedId,
  );
  return { componentList, selectedId, selectedComponent, copiesComponent };
}
export default useGetComponentInfo;
