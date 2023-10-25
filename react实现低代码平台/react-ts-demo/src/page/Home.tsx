import React, { FC } from "react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { MANAGE_PATHNAME } from "../router";
import Styles from "./Home.module.scss";

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const nav = useNavigate();
  return (
    <div className={Styles.container}>
      <div className={Styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份，发布问卷 90 份，收到答卷 1000 份
        </Paragraph>
      </div>
      <div>
        <Button type="primary" onClick={() => nav(MANAGE_PATHNAME)}>
          开始使用
        </Button>
      </div>
    </div>
  );
};

export default Home;
