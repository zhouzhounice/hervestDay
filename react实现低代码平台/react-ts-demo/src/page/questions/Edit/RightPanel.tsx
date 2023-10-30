import React, { FC } from "react";
import { Tabs } from "antd";
import { FileTextFilled, SettingOutlined } from "@ant-design/icons";
import ComponentProp from "./components/ComponentProp";

const RightPanel: FC = () => {
  const tabsItems = [
    {
      key: "prop",
      label: (
        <span>
          <FileTextFilled />
          属性
        </span>
      ),
      children: <ComponentProp />,
    },
    {
      key: "setting",
      label: (
        <span>
          <SettingOutlined />
          设置
        </span>
      ),
      children: <div>页面设置</div>,
    },
  ];
  return <Tabs items={tabsItems} defaultActiveKey="prop"></Tabs>;
};

export default RightPanel;
