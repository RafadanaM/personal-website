import { RefObject, useEffect, useRef, useState } from "react";

const useIsInView = <T extends Element>(ref: RefObject<T>, runOnce = false) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && runOnce) {
        observer.current?.disconnect();
      }
      setIsIntersecting(entry.isIntersecting);
    }, {});
  }, [runOnce]);

  useEffect(() => {
    if (ref.current && observer.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default useIsInView;
