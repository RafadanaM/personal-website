import { ReactNode } from "react";
import Wrapper from "../wrapper/Wrapper";
import styles from "./TextAnimation.module.css";

interface ITextAnimation {
  text: string;
  vertical?: boolean;
  reverse?: boolean;
  inOut?: boolean;
  animationDuration?: string;
  inDelay?: number;
  outDelay?: number;
  animate?: boolean;
  wrap?: (children: React.ReactNode) => JSX.Element;
}

const TextAnimation = ({
  text,
  reverse,
  inOut = false,
  animationDuration,
  inDelay = 250,
  outDelay = 3000,
  animate = true,
  vertical = false,
  wrap,
}: ITextAnimation) => {
  const animation = animate
    ? inOut
      ? vertical
        ? styles.animateInOutVertical
        : styles.animateInOut
      : vertical
        ? styles.animateInVertical
        : styles.animateIn
    : "";
  return (
    <Wrapper<ReactNode>
      wrap={wrap}
      element={Array.from(text).map((chr, idx) =>
        chr === "_" ? (
          <br key={idx} />
        ) : (
          <span key={idx} className={styles.container}>
            <span
              style={{
                animationDuration,
                animationDelay: `${inDelay}ms, ${outDelay}ms`,
              }}
              className={`
            ${styles.container}
            ${styles.animationItem}
            ${vertical ? styles.vertical : ""}
            ${animation}
            ${reverse ? styles.reverse : ""}
          `}
            >
              {chr === " " ? <>&nbsp;</> : chr}
            </span>
          </span>
        ),
      )}
    />
  );
};

export default TextAnimation;
