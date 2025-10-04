import { RefObject, useEffect, useRef } from "react";

export interface Size {
  width: number;
  height: number;
}

interface ResizeObserverParam<T extends HTMLElement> {
  ref: RefObject<T | null>;
  onResize?: (size: Size) => void;
}

function useResizeObserver<T extends HTMLElement>({
  ref,
  onResize,
}: ResizeObserverParam<T>) {
  const memoOnResize = useRef<(size: Size) => void | undefined>(undefined);

  memoOnResize.current = onResize;

  useEffect(() => {
    if (!("ResizeObserver" in window) || !ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      memoOnResize.current?.({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);
}

export default useResizeObserver;
