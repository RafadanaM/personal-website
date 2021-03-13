import { useEffect, useState } from "react";

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      if (entry.isIntersecting === true) observer.unobserve(entry.target);
    });
    observer.observe(ref.current);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
