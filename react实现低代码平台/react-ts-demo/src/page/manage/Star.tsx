import React, { FC } from "react";
import styles from "./common.module.scss";
import { Spin, Typography } from "antd";
import ListItem from "../../components/ListItem";
import type { ItemType } from "../../components/ListItem";
import ListSearch from "../../components/ListSearch";
import useLoadQuesList from "../../hooks/useLoadQuesList";
import CommonPagination from "../../components/CommonPagination";

const { Title } = Typography;
const Star: FC = () => {
  const { data = {}, loading } = useLoadQuesList({ isStar: true });
  const { list, total }: { list: ItemType[]; total: number } = data as {
    list: ItemType[];
    total: number;
  };
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
      <div className={styles.footer}>
        <CommonPagination total={total} />
      </div>
    </>
  );
};

export default Star;
