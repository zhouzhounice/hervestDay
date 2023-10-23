import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Styles from "./MainLayout.module.scss";

const { Header, Footer, Content } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={Styles.headerStyle}>MainLayout header</Header>
      <Content className={Styles.contentStyle}>
        <Outlet />
      </Content>
      <Footer className={Styles.footerStyle}>MainLayout footer</Footer>
    </Layout>
  );
};

export default MainLayout;
