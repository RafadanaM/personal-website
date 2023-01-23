import { StaticImageData } from "next/image";

export interface IPageSectionProps {
  id: string;
}

export interface IPageSection {
  id: string;
  section: (id: IPageSectionProps) => JSX.Element;
}

export interface IImage {
  id: string;
  src: any;
}

export interface IContact extends IImage {
  href: string;
}

export interface IProject {
  name: string;
  description: string;
  image: StaticImageData;
  git?: string;
  url?: string;
}
