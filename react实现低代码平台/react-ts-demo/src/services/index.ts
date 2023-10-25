import axios from "axios";
import { message } from "antd";

const instance = axios.create({
  timeout: 10 * 1000,
});

// response 拦截：统一处理 errno 和 msg
instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as ResType;
  const { error, data, msg } = resData;
  if (error !== 0) {
    // 错误提示
    if (msg) {
      message.error(msg);
    }

    throw new Error(msg);
  }

  return data as never;
});

export default instance;

export type ResType = {
  error: number;
  data?: ResDataType;
  msg?: string;
};

export type ResDataType = {
  [key: string]: unknown;
};
