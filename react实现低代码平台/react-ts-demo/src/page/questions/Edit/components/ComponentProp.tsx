import React, { FC } from "react";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";
import { genComponentConfByType } from "../../../../components/QuestionComponents";

const NoProp: FC = () => {
  return <div style={{ textAlign: "center" }}>未选择组件</div>;
};

const ComponentProp: FC = () => {
  const { selectedComponent } = useGetComponentInfo();
  if (selectedComponent == undefined) {
    return <NoProp />;
  }
  const { type, props } = selectedComponent;
  const componentConf = genComponentConfByType(type);
  if (componentConf == null) return <NoProp />;
  const { PropComponent } = componentConf;
  return <PropComponent {...props} />;
};

export default ComponentProp;
