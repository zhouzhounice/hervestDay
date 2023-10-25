import React, { ChangeEvent, FC, useState } from "react";
import { Input } from "antd";

const { Search } = Input;
const ListSearch: FC = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSearch = (val: string) => {
    console.log(val);
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
