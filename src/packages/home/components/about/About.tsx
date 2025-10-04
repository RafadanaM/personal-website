import Image from "next/image";

import AnimatedText from "@/packages/ui/components/AnimatedText";
import Token from "@/packages/ui/constants";
import Container from "@common/components/Container";
import Section from "@common/components/Section";

import javaLogo from "@images/java.svg";
import nextLogo from "@images/next-logo.svg";
import nodeLogo from "@images/nodejs.svg";
import pgsqlLogo from "@images/pgsql.svg";
import pythonLogo from "@images/python.svg";
import reactLogo from "@images/react.svg";
import tsLogo from "@images/ts-logo.svg";
import jsLogo from "@images/js-logo.svg";

const technologies = [
  { imageUrl: jsLogo, label: "Javascript" },
  { imageUrl: tsLogo, label: "Typescript" },
  { imageUrl: reactLogo, label: "ReactJS" },
  { imageUrl: nextLogo, label: "NextJS" },
  { imageUrl: nodeLogo, label: "NodeJS" },
  { imageUrl: pgsqlLogo, label: "Postgre SQL" },
  { imageUrl: pythonLogo, label: "Python" },
  { imageUrl: javaLogo, label: "Java" },
];

function AboutSection() {
  return (
    <Section id="about">
      <Container className="py-16 px-4 lg:px-8 2xl:px-0 flex flex-col gap-y-10 md:gap-y-20">
        <div className="flex gap-x-3 lg:gap-x-10">
          <AnimatedText
            as="h2"
            text="ABOUT"
            color={Token.colors.primary}
            className="mt-4 text-[clamp(3.5rem,12vw,8rem)] w-[clamp(3.5rem,12vw,8rem)] font-bold origin-top-left translate-x-[clamp(3.5rem,12vw,8rem)] rotate-90 leading-none"
          />
          <div className="flex-1 mt-18 md:mt-24 p-4 border-2 border-primary rounded-md bg-neutral-dark">
            <p className="md:text-justify md:text-2xl leading-snug font-medium">
              {
                "Hi, I’m Rafadana Mountheira (Rafa) — a Web Software Engineer focused on building fast, user-friendly web experiences. My passion lies in front-end development, but I also enjoy exploring back-end development and anything that is related with information technology like data science. I love writing clean, maintainable code and building interfaces that feel smooth, reliable, and enjoyable to use."
              }
            </p>
            <br />
            <p className="md:text-justify md:text-2xl font-medium">
              {"In my free time I enjoy:"}
            </p>
            <ul className="flex flex-col gap-y-1 md:gap-y-2 mt-2 md:mt-4">
              <li className="md:text-justify md:text-2xl font-medium">
                {"• Football"}
              </li>
              <li className="md:text-justify md:text-2xl font-medium">
                {"• Programming"}
              </li>
              <li className="md:text-justify md:text-2xl font-medium">
                {"• Games"}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 md:gap-y-4 self-end">
          <h3 className="text-right text-xl md:text-2xl text-primary font-medium leading-none">
            {"Technologies I Use"}
          </h3>
          <ul
            className="flex self-end items-center gap-x-4 md:gap-x-6 py-2 md:py-4 px-4 md:px-6 border border-primary rounded-md bg-neutral-dark"
            style={{ boxShadow: `4px 3px ${Token.colors.primary}` }}
          >
            {technologies.map(({ imageUrl, label }) => (
              <li key={label} className="relative h-8 w-8 md:h-16 md:w-16">
                <Image fill src={imageUrl} alt={label} />
                <span className="sr-only">{label}</span>
              </li>
            ))}
          </ul>
          <p className="text-right text-sm text-primary md:text-lg leading-tight">
            {"I’m always open to learning and adapting to new technologies"}
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default AboutSection;
