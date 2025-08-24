"use client";
import { useCallback } from "react";

export const useLocalStorage = () => {
  const isBrowser = typeof window !== "undefined";

  const get = useCallback(
    (key: string) => {
      if (!isBrowser) return null;
      const getData = window.localStorage.getItem(key);
      return getData ? JSON.parse(getData) : undefined;
    },
    [isBrowser],
  );

  const set = useCallback(
    (key: string, value: string | object) => {
      if (!isBrowser) return;
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [isBrowser],
  );

  const remove = useCallback(
    (key: string) => {
      if (!isBrowser) return;
      window.localStorage.removeItem(key);
    },
    [isBrowser],
  );

  return { get, set, remove };
};
