import React, { FC } from "react";
import { Spin, Typography } from "antd";
import ListItem from "../../components/ListItem";
import ListSearch from "../../components/ListSearch";
import type { ItemType } from "../../components/ListItem";
import styles from "./common.module.scss";
import useLoadQuesList from "../../hooks/useLoadQuesList";

const { Title } = Typography;
const QuestionCard: FC = () => {
  const { data = {}, loading } = useLoadQuesList();
  const { list }: { list: ItemType[] } = data as { list: ItemType[] };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div className={styles.example}>
            <Spin />
          </div>
        )}

        {!loading &&
          (list || []).length > 0 &&
          list.map((item: ItemType) => (
            <ListItem listItem={item} key={item._id} />
          ))}
      </div>
      <div className={styles.footer}>list page footer</div>
    </>
  );
};

export default QuestionCard;
