import React, { FC, useEffect, useRef, useState, useMemo } from "react";
import { Empty, Spin, Typography } from "antd";
import type { ItemType } from "../../components/ListItem";
import ListItem from "../../components/ListItem";
import ListSearch from "../../components/ListSearch";
import styles from "./common.module.scss";
import { useSearchParams } from "react-router-dom";
import { useDebounceFn, useRequest } from "ahooks";
import { LIST_PAGE_SIZE, LIST_SEARCH_PARAM_KEY } from "../../constant";
import { getQuestionListService } from "../../services/question";

const { Title } = Typography;
const QuestionCard: FC = () => {
  const [started, setStarted] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<ItemType[]>([]);
  const [total, setTotal] = useState(0);
  const haveMoreData = total > list.length;

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";

  // 变化时重置信息
  useEffect(() => {
    setStarted(false);
    setPage(1);
    setList([]);
    setTotal(0);
  }, [keyword]);

  // 真正加载
  const { run: load, loading } = useRequest(
    async () => {
      return await getQuestionListService({
        page,
        pageSize: LIST_PAGE_SIZE,
        keyword,
      });
    },
    {
      manual: true,
      onSuccess(result) {
        const { list: l = [], total = 0 } = result as {
          list: ItemType[];
          total: number;
        };
        setList(list.concat(l)); // 累计
        setTotal(total);
        setPage(page + 1);
      },
    },
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      const elem = containerRef.current;
      if (elem == null) return;
      const domRect = elem.getBoundingClientRect();
      if (domRect == null) return;
      const { bottom } = domRect;
      if (bottom <= document.body.clientHeight) {
        load(); // 真正加载数据
        setStarted(true);
      }
    },
    {
      wait: 1000,
    },
  );

  // 1. 当页面加载，或者 url 参数（keyword）变化时，触发加载
  useEffect(() => {
    tryLoadMore(); // 加载第一页，初始化
  }, [searchParams]);

  // 2. 当页面滚动时，要尝试触发加载
  useEffect(() => {
    if (haveMoreData) {
      window.addEventListener("scroll", tryLoadMore); // 防抖
    }

    return () => {
      window.removeEventListener("scroll", tryLoadMore); // 解绑事件，重要！！！
    };
  }, [searchParams, haveMoreData]);

  // LoadMore Elem
  const LoadMoreContentElem = useMemo(() => {
    if (!started || loading) return <Spin />;
    if (total === 0) return <Empty description="暂无数据" />;
    if (!haveMoreData) return <span>没有更多了...</span>;
    return <span>开始加载下一页</span>;
  }, [started, loading, haveMoreData]);

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
        {(list || []).length > 0 &&
          list.map((item: ItemType) => (
            <ListItem listItem={item} key={item._id} />
          ))}
      </div>
      <div className={styles.footer}>
        <div ref={containerRef}>{LoadMoreContentElem}</div>
      </div>
    </>
  );
};

export default QuestionCard;
