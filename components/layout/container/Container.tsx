import { HTMLProps } from "react";
import styles from "./Container.module.css";

const Container = ({
  children,
  className,
  ...rest
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`${styles.container} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
