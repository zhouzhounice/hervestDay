export type ResType = {
  error: number;
  data?: ResDataType;
  msg?: string;
};

export type ResDataType = {
  [key: string]: unknown;
};

export type UserInfoType = {
  username: string;
  nickname: string;
};

export type RegisterInfoType = {
  password: string;
} & UserInfoType;

export type SearchOption = {
  keyword: string;
  isStar: boolean;
  isDelete: boolean;
  page: number;
  pageSize: number;
};
