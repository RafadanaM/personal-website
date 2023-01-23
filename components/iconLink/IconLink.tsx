import Link, { LinkProps } from "next/link";
import styles from "./IconLink.module.css";
import Image, { StaticImageData } from "next/image";

interface IIconLink extends LinkProps {
  src: StaticImageData;
  alt: string;
  linkClassName?: string;
  imgClassName?: string;
}

const IconLink = ({
  src,
  alt,
  imgClassName,
  linkClassName,
  ...rest
}: IIconLink) => {
  return (
    <Link
      className={`bg-primary-400 bg-opacity-50 ${styles.link} ${
        linkClassName ?? ""
      }`}
      {...rest}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        src={src}
        alt={alt}
        className={` ${styles.icon} ${imgClassName ?? ""}`}
      />
    </Link>
  );
};

export default IconLink;
