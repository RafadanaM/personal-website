import { HTMLProps } from "react";
import styles from "./Carousel.module.css";
const CarouselItem = ({
  className,
  children,
  ...rest
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`${styles.item} ${className ?? ""}`} {...rest}>
      {children}
    </div>
  );
};

export default CarouselItem;
