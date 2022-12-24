import { IContact, IImage, IPageSection } from "../interfaces/interfaces";
import Home from "../components/sections/home/Home";
import About from "../components/sections/about/About";
import Project from "../components/sections/project/Project";
import Contact from "../components/sections/contact/Contact";
import tsLogo from "../public/images/ts-logo.svg";
import jsLogo from "../public/images/js-logo.svg";
import pythonLogo from "../public/images/python.svg";
import flutterLogo from "../public/images/flutter.svg";
import javaLogo from "../public/images/java.svg";
import reactLogo from "../public/images/react.svg";
import nodeLogo from "../public/images/nodejs.svg";
import nextLogo from "../public/images/next-logo.svg";
import pgsqlLogo from "../public/images/pgsql.svg";
import mail from "../public/images/mail.svg";
import twitter from "../public/images/twitter.svg";
import linkedin from "../public/images/linkedin.svg";
import github from "../public/images/github.svg";

export const pageSections: IPageSection[] = [
  { id: "home", section: Home },
  { id: "about", section: About },
  { id: "project", section: Project },
  { id: "contact", section: Contact },
];

export const languages: IImage[] = [
  { id: "Typescript", src: tsLogo },
  { id: "Javascript", src: jsLogo },
  { id: "Python", src: pythonLogo },
  { id: "Flutter", src: flutterLogo },
  { id: "Java", src: javaLogo },
  { id: "PostgreSQL", src: pgsqlLogo },
  { id: "ReactJs", src: reactLogo },
  { id: "NextJs", src: nextLogo },
  { id: "NodeJs", src: nodeLogo },
];

export const contacts: IContact[] = [
  {
    id: "Email",
    src: mail,
    href: "mailto:m.mountheira@uqconnect.edu.au, muhammad.rafadana@ui.ac.id",
  },
  {
    id: "Linkedin",
    src: linkedin,
    href: "https://www.linkedin.com/in/muhammad-rafadana/",
  },
  {
    id: "Github",
    src: github,
    href: "https://github.com/RafadanaM",
  },
  {
    id: "Twitter",
    src: twitter,
    href: "https://twitter.com/Rafadanaaa",
  },
];
