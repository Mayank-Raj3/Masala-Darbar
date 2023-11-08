import { useEffect, useState } from "react";
// coustom hooks

const useOnlineStatus = () => {
  const [online, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setOnlineStatus(true));
    window.addEventListener("offline", () => setOnlineStatus(false));
  }, []);
  console.log(online);

  return online;
};

export default useOnlineStatus;
