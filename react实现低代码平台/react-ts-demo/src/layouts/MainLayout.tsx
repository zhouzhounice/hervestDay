import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Logo from "../components/Logo";
import Styles from "./MainLayout.module.scss";
import UserInfo from "../components/UserInfo";
import userLoadUserData from "../hooks/userLoadUserData";

const { Header, Footer, Content } = Layout;

const MainLayout: FC = () => {
  const { waitingUserData } = userLoadUserData();
  return (
    <Layout>
      <Header className={Styles.headerStyle}>
        <div className={Styles.left}>
          <Logo />
        </div>
        <div className={Styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={Styles.contentStyle}>
        {!waitingUserData && <Outlet />}
      </Content>
      <Footer className={Styles.footerStyle}>
        低代码平台demo©2023 - Anne.Created by 周俐君
      </Footer>
    </Layout>
  );
};

export default MainLayout;
