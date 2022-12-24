import styles from "./Project.module.css";
import { IPageSectionProps } from "../../../interfaces/interfaces";
import Section from "../../layout/section/Section";
import TextAnimation from "../../TextAnimation/TextAnimation";
import { useRef } from "react";
import useIsInView from "../../../hooks/useIsInView";
import Link from "next/link";
import Title from "../../title/Title";

const Project = (props: IPageSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref, true);
  return (
    <Section {...props} className={styles.project}>
      <div ref={ref} className={styles.title}>
        <Title text="PROJECTS" animate={isInView} />
      </div>
      <div className={`fw-bold fs-xl ${styles.content}`}>
        <span>UNDER CONSTRUCTION!</span>
        <Link
          href="https://github.com/RafadanaM?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
        >
          Check out my GitHub repo!
        </Link>
      </div>
    </Section>
  );
};

export default Project;
