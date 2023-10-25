import React, { FC, useState } from "react";
import styles from "./common.module.scss";
import { Empty, Typography } from "antd";
import ListItem from "../../components/ListItem";
import { Survey } from "./List";
import ListSearch from "../../components/ListSearch";

const initState: Survey[] = [
  { id: "p2", title: "问卷调查2", isPublic: true, isStarState: true },
  { id: "p4", title: "问卷调查4", isPublic: true, isStarState: true },
];
const { Title } = Typography;
const Star: FC = () => {
  const [list] = useState<Survey[]>(initState);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 &&
          list.map((item: Survey) => (
            <ListItem listItem={item} key={item.id} />
          ))}
      </div>
      <div className={styles.footer}>list page footer</div>
    </>
  );
};

export default Star;
