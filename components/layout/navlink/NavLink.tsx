import Link, { LinkProps } from "next/link";
import TextAnimation from "../../TextAnimation/TextAnimation";
import styles from "./NavLink.module.css";

interface INavLink extends LinkProps {
  text: string;
  animate: boolean;
}

const NavLink = ({ text, animate, ...rest }: INavLink) => {
  return (
    <Link {...rest} passHref legacyBehavior replace scroll={false}>
      <a className={`fw-bold fs-link text-neutral-100 ${styles.link}`}>
        <TextAnimation
          text={text}
          animate={animate}
          animationDuration="750ms"
        />
      </a>
    </Link>
  );
};

export default NavLink;
