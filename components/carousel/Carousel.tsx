import { Fragment, useEffect, useRef, useState } from "react";
import right from "../../public/images/right.svg";
import left from "../../public/images/left.svg";
import styles from "./Carousel.module.css";
import Image from "next/image";

interface ICarousel<T> {
  items: T[];
  wrapper: (item: T) => JSX.Element;
  className?: string;
}

const Carousel = <T,>({ items, wrapper, className }: ICarousel<T>) => {
  const [selectedItem, setSelectedItem] = useState(items.length > 1 ? 1 : 0);
  const [animationDisabled, setAnimationDisabled] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  function nextItem() {
    if (animationDisabled) return;
    if (items.length === 1) return;
    if (selectedItem === items.length + 1) return;
    setSelectedItem((currentSelectedItem) => currentSelectedItem + 1);
  }

  function prevItem() {
    if (animationDisabled) return;
    if (items.length === 1) return;
    if (selectedItem === 0) return;
    setSelectedItem((currentSelectedItem) => currentSelectedItem - 1);
  }

  function handleTransitionEnd() {
    // If last element (actual first element clone) or first element (actual last element clone)
    if (selectedItem === items.length + 1 || selectedItem === 0) {
      setAnimationDisabled(true);
      setSelectedItem(selectedItem === 0 ? items.length : 1);
      timerRef.current = setTimeout(() => setAnimationDisabled(false), 300);
    }
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const CopiedLastItem = () =>
    items.length > 1 ? wrapper(items[items.length - 1]) : null;

  const CopiedFirstItem = () => (items.length > 1 ? wrapper(items[0]) : null);

  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(${selectedItem * -100}%)`,
          transition: animationDisabled ? "none" : "transform 500ms ease",
        }}
        className={styles.content}
      >
        {items.length === 1 ? (
          wrapper(items[0])
        ) : (
          <>
            <CopiedLastItem />
            {items.map((item, idx) => (
              <Fragment key={idx}>{wrapper(item)} </Fragment>
            ))}
            <CopiedFirstItem />
          </>
        )}
      </div>

      <button
        className={`${styles.navigation} ${styles.left}`}
        onClick={prevItem}
      >
        <Image src={left} className={styles.icon} alt="Previous Item" />
      </button>
      <button
        className={`${styles.navigation} ${styles.right}`}
        onClick={nextItem}
      >
        <Image src={right} className={styles.icon} alt="Next Item" />
      </button>
    </div>
  );
};

export default Carousel;
