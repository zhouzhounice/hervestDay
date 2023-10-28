import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentPropsType } from "../components/QuestionComponents";

function useGetComponentInfo(): ComponentPropsType[] {
  const components = useSelector<StateType>((state) => state.components);
  const { componentList = [] } = components as {
    componentList: ComponentPropsType[];
  };

  return componentList;
}
export default useGetComponentInfo;
