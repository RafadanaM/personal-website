import styles from "./Project.module.css";
import { IPageSectionProps, IProject } from "../../../interfaces/interfaces";
import Section from "../../layout/section/Section";
import { useRef } from "react";
import useIsInView from "../../../hooks/useIsInView";
import Title from "../../title/Title";
import Carousel from "../../carousel/Carousel";
import { projects } from "../../../data/data";
import CarouselItem from "../../carousel/CarouselItem";
import Image from "next/image";
import IconLink from "../../iconLink/IconLink";
import git from "../../../public/images/github.svg";
import link from "../../../public/images/link.svg";

const Project = (props: IPageSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref, true);
  return (
    <Section {...props} className={styles.project}>
      <div ref={ref} className={styles.title}>
        <Title text="PROJECTS" animate={isInView} />
      </div>
      <div>
        <Carousel<IProject>
          className={`${styles.carouselContainer} slide ${
            isInView ? "slide-in" : "slide-out"
          }`}
          items={projects}
          wrapper={(item) => (
            <CarouselItem className={styles.wrapper}>
              <Image className={styles.carouselBg} src={item.image} alt="" />
              <div className={styles.top}>
                <h3
                  className={`fs-project__title bg-primary-400 bg-opacity-60 ${styles.name}`}
                >
                  {item.name}
                </h3>
              </div>
              <div className={styles.bottom}>
                <div className={styles.icons}>
                  {item.git && (
                    <IconLink
                      src={git}
                      alt="github"
                      linkClassName={styles.icon}
                      href={item.git}
                    />
                  )}
                  {item.url && (
                    <IconLink
                      src={link}
                      alt="url"
                      linkClassName={styles.icon}
                      href={item.url}
                    />
                  )}
                </div>

                <div
                  className={`fs-project__desc bg-primary-400 bg-opacity-60 fs-lg ${styles.description}`}
                >
                  {item.description}
                </div>
              </div>
            </CarouselItem>
          )}
        />
      </div>
    </Section>
  );
};

export default Project;
