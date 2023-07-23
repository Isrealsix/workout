import { useEffect, useState } from "react";

const useCountdown = (idx: number, initialCount: number) => {
  const [countDown, setCountDown] = useState(initialCount);
  useEffect(() => {
    if (idx == -1) return;

    const interval = setInterval(() => {
      setCountDown((prevCount) => {
        console.log(prevCount);
        return prevCount - 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [idx]);

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount]);
  return countDown;
};

export default useCountdown;
