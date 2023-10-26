export type ResType = {
  error: number;
  data?: ResDataType;
  msg?: string;
};

export type ResDataType = {
  [key: string]: unknown;
};

export type SearchOption = {
  keyword: string;
  isStar: boolean;
  isDelete: boolean;
  page: number;
  pageSize: number;
};
