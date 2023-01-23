import { useState } from "react";
import styles from "./Intro.module.css";
import TextAnimation from "../TextAnimation/TextAnimation";

const Intro = () => {
  const [animationEnded, setAnimationEnded] = useState(false);

  return (
    <div
      style={animationEnded ? { display: "none" } : undefined}
      className={`bg-primary-400 ${styles.introContainer}`}
      onAnimationEnd={(e) => {
        if (e.animationName.includes("Intro_fade-out")) {
          setAnimationEnded(true);
        }
      }}
    >
      <div className={styles.introTitle}>
        <TextAnimation
          text="MUHAMMAD_RAFADANA_MOUNTHEIRA"
          wrap={(children) => (
            <h2 className="text-accent-400 fs-intro fw-bold">{children}</h2>
          )}
          inOut
        />
        <TextAnimation
          text="Rafadana Official Website"
          reverse
          inOut
          wrap={(children) => (
            <span className="fw-bold fs-intro__sub text-neutral-100">
              {children}
            </span>
          )}
        />
      </div>
    </div>
  );
};

export default Intro;
