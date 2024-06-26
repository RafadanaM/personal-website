import { forwardRef, ComponentPropsWithoutRef } from "react";
import styles from "./Section.module.css";

const Section = forwardRef<HTMLElement, ComponentPropsWithoutRef<"section">>(
  ({ className, children, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={`container ${styles.section} ${className}`}
        {...rest}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
