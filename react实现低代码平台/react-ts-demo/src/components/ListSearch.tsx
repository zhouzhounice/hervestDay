import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Input } from "antd";
import { LIST_SEARCH_PARAM_KEY } from "../constant";

const { Search } = Input;
const ListSearch: FC = () => {
  const [value, setValue] = useState("");
  const nav = useNavigate();
  const { pathname } = useLocation();
  // 获取url参数设置到input中
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const newVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    setValue(newVal);
  }, [searchParams]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSearch = (val: string) => {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${val}`,
    });
  };
  return (
    <Search
      placeholder="请输入关键字"
      size="large"
      value={value}
      allowClear
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: "260px" }}
    />
  );
};

export default ListSearch;
