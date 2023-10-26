import React, { FC, useEffect, useState } from "react";
import { Pagination } from "antd";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import {
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE,
  LIST_PAGE_SIZE_PARAM_KEY,
} from "../constant";

type PropsType = {
  total: number;
};
const CommonPagination: FC<PropsType> = (props: PropsType) => {
  const { total } = props;
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const nav = useNavigate();
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(LIST_PAGE_SIZE);
  useEffect(() => {
    const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || "") || 1;
    setCurrent(page);
    const pageSize =
      parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || "") ||
      LIST_PAGE_SIZE;
    setPageSize(pageSize);
  }, []);

  const handleChange = (page: number, pageSize: number) => {
    searchParams.set(LIST_PAGE_PARAM_KEY, page.toString());
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString());
    setCurrent(page);
    setPageSize(pageSize);
    nav({
      pathname,
      search: searchParams.toString(),
    });
  };
  return (
    <Pagination
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={handleChange}
    />
  );
};

export default CommonPagination;
