import styles from "./About.module.css";
import { IPageSectionProps } from "../../../interfaces/interfaces";
import Section from "../../layout/section/Section";
import TextAnimation from "../../TextAnimation/TextAnimation";
import { useRef } from "react";
import useIsInView from "../../../hooks/useIsInView";
import Image from "next/image";
import { languages } from "../../../data/data";
import Title from "../../title/Title";

const About = (props: IPageSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref, true);

  const transition = `slide ${isInView ? "slide-in" : "slide-out"}`;

  return (
    <Section {...props} ref={ref} className={styles.about}>
      <Title text="ABOUT" animate={isInView} vertical />

      <div className={`${styles.content} fs-desc`}>
        <div
          className={`bg-neutral-900 text-neutral-100 fw-semibold ${styles.description} ${transition}`}
        >
          Hello! I&apos;m Muhammad Rafadana Mountheira, a Computer Science
          student at University of Queensland. My interests includes but not
          limited to Front-End development and Data Science. I like to spend my
          free by exploring new technologies and sharpening my current skills.
          <br />
          <br />
          My hobbies are:
          <ul>
            <li>Football</li>
            <li>Programming</li>
            <li>Games</li>
          </ul>
        </div>
        <div>
          <TextAnimation
            animate={isInView}
            text="LANGUAGES / FRAMEWORKS:"
            inDelay={500}
            wrap={(children) => (
              <h3 className="fw-bold fs-sub text-accent-400">{children}</h3>
            )}
          />

          <div
            className={`bg-neutral-900 text-neutral-100 relative ${styles.language} ${transition}`}
          >
            <ul>
              {languages.map(({ id, src }) => (
                <li key={id}>
                  <Image src={src} alt={id} />
                </li>
              ))}
            </ul>
          </div>
          <TextAnimation
            animate={isInView}
            text="I'm always keen to learn new technologies!"
            wrap={(children) => (
              <h3 className="fw-bold fs-intro__sub text-accent-400">
                {children}
              </h3>
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
