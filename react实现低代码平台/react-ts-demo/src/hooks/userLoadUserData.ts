import { useState, useEffect } from "react";
import { useRequest } from "ahooks";
import { useDispatch } from "react-redux";
import useGetUserInfo from "./useGetUserInfo";
import { getUserInfoService } from "../services/user";
import { loginReducer } from "../store/userReducer";

function userLoadUserData() {
  const [waitingUserData, setWaitingUserData] = useState(true);
  const dispatch = useDispatch();
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result as {
        username: string;
        nickname: string;
      };
      dispatch(loginReducer({ username, nickname }));
    },
    onFinally() {
      setWaitingUserData(false);
    },
  });

  const { username } = useGetUserInfo();
  useEffect(() => {
    if (username) {
      setWaitingUserData(false);
      return;
    }
    run();
  }, [username]);

  return { waitingUserData };
}
export default userLoadUserData;
