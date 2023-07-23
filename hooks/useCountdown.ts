import { useEffect, useRef, useState } from "react";

const useCountdown = (idx: number, initialCount: number) => {
  const intervalRef = useRef<NodeJS.Timer>();
  const [countDown, setCountDown] = useState(initialCount);
  useEffect(() => {
    if (idx == -1) return;

    intervalRef.current = setInterval(() => {
      setCountDown((prevCount) => {
        console.log(prevCount);
        return prevCount - 1;
      });
    }, 100);
    return cleanup;
  }, [idx]);

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount]);

  useEffect(() => {
    if (countDown === 0) cleanup();
  }, [countDown])

  const cleanup = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined
    }
  }
  return countDown;
};

export default useCountdown;
