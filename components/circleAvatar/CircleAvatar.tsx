import { useRef } from "react";
import Image from "next/image";
import styles from "./CircleAvatar.module.css";
import avatar from "../../public/images/avatar.png";
import useIsInView from "../../hooks/useIsInView";

const CircleAvatar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref, true);

  return (
    <div
      ref={ref}
      className={`bg-neutral-100 slide ${isInView ? "slide-in" : "slide-out"} ${styles.avatar}`}
    >
      <Image src={avatar} alt="Profile" fill />
    </div>
  );
};

export default CircleAvatar;
