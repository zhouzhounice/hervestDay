import axios from "./index";
import type { ResDataType } from "./common";

export async function getUserInfoService(): Promise<ResDataType> {
  const url = "/api/user/info";
  return (await axios.get(url)) as ResDataType;
}

export async function registerService(
  username: string,
  password: string,
  nickname?: string,
): Promise<ResDataType> {
  const url = "/api/user/register";
  const body: ResDataType = {
    username,
    password,
    nickname: nickname || username,
  };
  return (await axios.post(url, body)) as ResDataType;
}

export async function loginService(
  username: string,
  password: string,
): Promise<ResDataType> {
  const url = "/api/user/login";
  const body: ResDataType = {
    username,
    password,
  };
  return (await axios.post(url, body)) as ResDataType;
}
