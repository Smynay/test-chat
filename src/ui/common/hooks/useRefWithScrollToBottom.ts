import { useEffect, useRef } from "react";

export const useRefWithScrollToBottom = () => {
  const ref = useRef<HTMLElement>(null);

  const handler = (event: any) => {
    const { currentTarget: target } = event;
    target?.scroll({ top: target?.scrollHeight, behavior: "instant" });
  };

  useEffect(() => {
    const tempRef = ref.current;

    ref.current?.addEventListener("DOMNodeInserted", handler);

    return () => {
      tempRef?.removeEventListener("DOMNodeInserted", handler);
    };
  }, []);

  return ref;
};
