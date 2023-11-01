import React, { FC } from "react";
import { useDispatch } from "react-redux";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";
import {
  ComponentPropsType,
  genComponentConfByType,
} from "../../../../components/QuestionComponents";
import { changeComponentProps } from "../../../../store/componentsReducer";

const NoProp: FC = () => {
  return <div style={{ textAlign: "center" }}>未选择组件</div>;
};

const ComponentProp: FC = () => {
  const { selectedComponent } = useGetComponentInfo();
  const dispatch = useDispatch();
  if (selectedComponent == undefined) {
    return <NoProp />;
  }
  const { type, props } = selectedComponent;
  const componentConf = genComponentConfByType(type);
  if (componentConf == null) return <NoProp />;
  const { PropComponent } = componentConf;

  const changeProps = (newProps: ComponentPropsType) => {
    if (selectedComponent == null) return;
    const { fe_id } = selectedComponent;
    dispatch(changeComponentProps({ fe_id, newProps }));
  };
  return <PropComponent {...props} onChange={changeProps} />;
};

export default ComponentProp;
