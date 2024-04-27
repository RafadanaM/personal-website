import { IPageSectionProps } from "../../../interfaces/interfaces";
import styles from "./Home.module.css";
import Section from "../../layout/section/Section";
import TextAnimation from "../../TextAnimation/TextAnimation";
import React from "react";
import CircleAvatar from "../../circleAvatar/CircleAvatar";

const Home = (props: IPageSectionProps) => {
  const wrapper = (children: React.ReactNode) => {
    return (
      <span
        style={{ display: "inline-block" }}
        className="text-accent-400 fw-bold"
      >
        {children}
      </span>
    );
  };

  return (
    <Section {...props} className={styles.home}>
      <CircleAvatar />

      <h1 className={styles.name}>
        <TextAnimation inDelay={3500} wrap={wrapper} text="MUHAMMAD" />
        <TextAnimation inDelay={3500} wrap={wrapper} text="RAFADANA" />
        <TextAnimation inDelay={3500} wrap={wrapper} text="MOUNTHEIRA" />
      </h1>
    </Section>
  );
};

export default Home;
