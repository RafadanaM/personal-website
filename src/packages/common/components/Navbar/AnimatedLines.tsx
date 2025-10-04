"use client";

import throttle from "@common/utils/throttle";
import { useEffect, useState } from "react";

export default function AnimatedLines() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 10);
    }, 150);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-row items-center">
      <div
        className={`h-0.5 flex-1 bg-primary origin-right transition-transform duration-300 ${
          scrolled ? "scale-x-100" : "scale-x-0"
        } `}
      />

      <div
        className={`h-0.5 flex-1 bg-primary origin-left transition-transform duration-300 ${
          scrolled ? "scale-x-100" : "scale-x-0"
        } `}
      />
    </div>
  );
}
