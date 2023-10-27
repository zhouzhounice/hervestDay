import { useState, useEffect } from "react";

function userLoadUserData() {
  const [waitingUserData, setWaitingUserData] = useState(true);
  return { waitingUserData };
}
export default userLoadUserData();
