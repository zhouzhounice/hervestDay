import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsInfoType } from "../store/componentsReducer";

function useGetComponentInfo(): { componentList: ComponentsInfoType[] } {
  const components = useSelector<StateType>((state) => state.components);
  const { componentList = [] } = components as {
    componentList: ComponentsInfoType[];
  };

  return { componentList };
}
export default useGetComponentInfo;
