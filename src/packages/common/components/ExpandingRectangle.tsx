"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Token from "@/packages/ui/constants";
import debounce from "@common/utils/debounce";
import useResizeObserver, { Size } from "@core/hooks/useResizeObserver";
interface ExpandingRectangleProps {
  color?: (typeof Token.colors)[keyof typeof Token.colors];
  rotation?: number;
  offset?: {
    top?: number | string;
    left?: number | string;
    bottom?: number | string;
    right?: number | string;
  };
  transformOrigin?: string;
}
export default function ExpandingRectangle({
  rotation = 0,
  color = Token.colors.secondary,
  offset,
  transformOrigin,
}: ExpandingRectangleProps) {
  const [scale, setScale] = useState(0);
  const [width, setWidth] = useState(0);
  const windowRef = useRef<HTMLElement>(null);
  useEffect(() => {
    windowRef.current = document.body;
  }, []);
  const top = offset?.top;
  const left = offset?.left;
  const bottom = offset?.bottom;
  const right = offset?.right;
  const ref = useRef<HTMLDivElement>(null);
  const debouncedUpdateWidth = useMemo(() => {
    return debounce(({ width }: Size) => {
      setWidth(width / Math.cos((-55 * Math.PI) / 180));
    }, 500);
  }, []);
  useResizeObserver({
    ref: windowRef,
    onResize: debouncedUpdateWidth,
  });
  useEffect(() => {
    if (!width) return;
    const id = setTimeout(() => {
      setScale(120);
    }, 200);
    return () => {
      clearTimeout(id);
    };
  }, [width]);
  return (
    <div
      ref={ref}
      className="absolute origin-left h-72 opacity-10 -z-10"
      style={{
        top,
        left,
        bottom,
        right,
        backgroundColor: color,
        transformOrigin,
        rotate: `${rotation}deg`,
        scale: `${scale}% 100%`,
        transition: "scale 1000ms",
        width,
      }}
    />
  );
}
