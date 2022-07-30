import { useEffect, useRef } from "react";

export const useRefWithScrollToBottom = () => {
  const ref = useRef<HTMLElement>(null);

  const handler = (event: any) => {
    const { currentTarget: target } = event;
    target?.scroll({ top: target?.scrollHeight, behavior: "instant" });
  };

  useEffect(() => {
    ref.current?.addEventListener("DOMNodeInserted", handler);

    return () => {
      ref.current?.removeEventListener("DOMNodeInserted", handler);
    };
  }, []);

  return ref;
};
