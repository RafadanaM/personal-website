import AnimatedText from "@/packages/ui/components/AnimatedText";
import Token from "@/packages/ui/constants";
import Container from "@common/components/Container";
import Section from "@common/components/Section";

import ProjectItem, { IProject } from "./ProjectItem";

import gat from "@images/gat.png";
import xpend from "@images/xpend.png";
import holo from "@images/holostream.png";
import repo from "@images/repo.png";

export const projects: IProject[] = [
  {
    name: "Guess The Anime Title",
    description:
      "Guess The Title is a wordle-like hangman browser game that allows user to guess random anime title daily, made using React, NodeJs, TypeORM, and PostgeSQL",
    image: gat,
    url: "https://guesstheanimetitle.rafadana.com",
    git: "https://github.com/RafadanaM/AnimeHangman",
  },
  {
    name: "Xpend",
    description:
      "Xpend is an expense and income tracker made with React, Redux, NodeJs, TypeORM, and PostgreSQL",
    image: xpend,
    url: "https://xpend.rafadana.com",
    git: "https://github.com/RafadanaM/xpend",
  },
  {
    name: "Hololive Stream Checker",
    description:
      "Hololive Checker is a website that provides hololive members live stream information using Web Scraping, made using NextJS, NodeJs, TypeORM, and PostgreSQL",
    image: holo,
    url: "https://hololivestreams.rafadana.com",
    git: "https://github.com/RafadanaM/hololivechecker",
  },
  {
    name: "Checkout my GitHub Repo",
    description:
      "You can see other projects and little expirements on my GitHub",
    image: repo,
    git: "https://github.com/RafadanaM",
  },
];

function ProjectSection() {
  return (
    <Section id="projects">
      <Container className="py-16 px-4 md:px-8">
        <AnimatedText
          text="PROJECTS"
          as="h2"
          color={Token.colors.primary}
          className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
        />

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-6 md:gap-y-8 lg:gap-y-16">
          {projects.map((project) => (
            <ProjectItem key={project.git} project={project} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default ProjectSection;
