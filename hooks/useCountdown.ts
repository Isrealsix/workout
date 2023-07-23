import { useEffect, useRef, useState } from "react";

const useCountdown = (idx: number, initialCount: number) => {
  const intervalRef = useRef<NodeJS.Timer>();
  const [countDown, setCountDown] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (idx == -1) return;

    if (isRunning && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCountDown((prevCount) => {
          return prevCount - 1;
        });
      }, 100);
    }
    return cleanup;
  }, [idx, isRunning]);

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount]);

  useEffect(() => {
    if (countDown === 0) cleanup();
  }, [countDown]);

  const cleanup = () => {
    if (intervalRef.current) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  function start (count?: number) {
    setCountDown(count ?? initialCount)
    setIsRunning(true);
  }
  return {
    countDown,
    isRunning,
    stop: cleanup,
    start
  };
};

export default useCountdown;
