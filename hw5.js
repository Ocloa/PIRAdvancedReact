import React from "react";

export const customThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = React.useState(value);
  const lastRun = useRef(Date.now());

  React.useEffect(() => {
    if (Date.now() - lastRun.current >= delay) {
        setThrottledValue(value);
        lastRun.current = Date.now();
      } else {
        const timer = setTimeout(() => {
          setThrottledValue(value);
          lastRun.current = Date.now();
        }, delay - (Date.now() - lastRun.current));
  
        return () => clearTimeout(timer);
      }
  }, [value, delay]);

  return throttledValue;
}

