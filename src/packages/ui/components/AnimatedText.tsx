"use client";

import { HTMLAttributes, createElement } from "react";
import Token from "../constants";
import { Color } from "../types";

type TextType = "p" | "h2";

interface AnimatedTextProps<T extends HTMLElement> {
  text: string;
  as?: TextType;
  color?: Color;
  className?: HTMLAttributes<T>["className"];
}

export default function AnimatedText<T extends HTMLElement>({
  text,
  as = "p",
  color = Token.colors.neutralLight,
  className,
}: AnimatedTextProps<T>) {
  return createElement(as, { style: { color }, className }, text);
}
