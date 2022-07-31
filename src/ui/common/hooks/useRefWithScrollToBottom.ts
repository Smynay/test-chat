import { useEffect, useRef } from "react";

export const useRefWithScrollToBottom = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const tempRef = ref.current;

    tempRef?.scroll({ top: tempRef?.scrollHeight });
  });

  return ref;
};
