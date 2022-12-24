import styles from "./Contact.module.css";
import { IPageSectionProps } from "../../../interfaces/interfaces";
import Section from "../../layout/section/Section";
import TextAnimation from "../../TextAnimation/TextAnimation";
import { useRef } from "react";
import useIsInView from "../../../hooks/useIsInView";
import { contacts } from "../../../data/data";
import Link from "next/link";
import Image from "next/image";
import Title from "../../title/Title";

const Contact = (props: IPageSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref, true);

  return (
    <Section {...props} className={styles.contact}>
      <div ref={ref} className={styles.title}>
        <Title text="CONTACT" animate={isInView} />
      </div>
      <div
        className={`${styles.content} slide ${
          isInView ? "slide-in" : "slide-out"
        }`}
      >
        {contacts.map(({ id, src, href }) => (
          <Link key={id} href={href} rel="noopener noreferrer" target="_blank">
            <Image src={src} alt={id} />
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
