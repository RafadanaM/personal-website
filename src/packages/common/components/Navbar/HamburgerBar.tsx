"use client";

import { useNavbar } from "@common/contexts/NavContext";
import { useEffect } from "react";

function HamburgerBar() {
  const { isOpen, setIsOpen } = useNavbar();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "initial";
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [isOpen]);

  return (
    <button
      className="md:hidden md:invisible flex flex-col justify-center items-center gap-y-1.5 w-8 h-8 cursor-pointer"
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <Line
        transformOrigin="91% 50%"
        transitionProperty="rotate"
        rotation={isOpen ? -45 : 0}
      />
      <Line transitionProperty="scale" scale={`${isOpen ? 0 : 1} 1`} />

      <Line
        transformOrigin="91% 50%"
        transitionProperty="rotate"
        rotation={isOpen ? 45 : 0}
      />
    </button>
  );
}

interface ILine {
  transformOrigin?: string;
  rotation?: number;
  scale?: string;
  transitionProperty?: string;
}

function Line({
  transformOrigin,
  transitionProperty,
  rotation = 0,
  scale,
}: ILine) {
  return (
    <div
      className="h-0.5 w-7 bg-neutral-light rounded-full duration-150"
      style={{
        transformOrigin,
        rotate: `${rotation}deg`,
        scale,
        transitionProperty,
      }}
    />
  );
}

export default HamburgerBar;
