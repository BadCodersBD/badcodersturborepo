import { useCallback } from "react";

// From: https://blog.logrocket.com/create-advanced-scroll-lock-react-hook/
export function useScrollLock() {
  const lockScroll = useCallback(
    () => (document.body.style.overflow = "hidden"),
    []
  );
  const unlockScroll = useCallback(
    () => (document.body.style.overflow = ""),
    []
  );

  return {
    lockScroll,
    unlockScroll,
  };
}
