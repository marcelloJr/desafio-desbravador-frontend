/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";

const useDebounce = (callback: (payload: any) => void, delay: number) => {
  const timeoutRef = useRef<any>(0);

  const debouncedCallback = useCallback((args: any) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};

export default useDebounce;