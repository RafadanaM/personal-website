import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import gitImage from "@images/github.svg";
import linkImage from "@images/link.svg";

export interface IProject {
  name: string;
  description: string;
  image: StaticImageData;
  git: string;
  url?: string;
}

interface Props {
  project: IProject;
}

export default function ProjectItem({ project }: Props) {
  return (
    <li className="flex overflow-hidden shadow-sm shadow-neutral-light/25 cursor-pointer flex-col group relative w-full aspect-video max-w-[420px] mx-auto border-2 border-transparent rounded-md">
      <div className="absolute -left-0 -right-0 top-0 rounded-t-md bg-primary p-2.5 pl-8">
        <Link href={project.url ?? project.git}>
          <h3 className="hover:underline text-neutral-dark font-bold underline-offset-2">
            {project.name}
          </h3>
        </Link>
      </div>

      <Image
        width={420}
        src={project.image}
        alt={project.name}
        className="rounded-sm absolute top-0 left-0 right-0 bottom-0 aspect-video -z-10 brightness-75"
      />

      <div className="flex flex-col mt-[44px] justify-between transition-transform md:translate-y-full md:group-hover:translate-y-0 bg-neutral-dark/75 h-[calc(100%-44px)] p-4 pb-2">
        <p>{project.description}</p>

        <div className="flex gap-x-2 items-center justify-end">
          <Link
            href={project.git}
            className="transition-colors p-1 hover:bg-neutral-light/20 rounded-sm"
          >
            <Image
              src={gitImage}
              alt={`${project.name} github repository`}
              height={24}
              width={24}
            />
          </Link>

          {!!project.url && (
            <Link
              href={project.url}
              className="transition-colors p-1 hover:bg-neutral-light/20 rounded-sm"
            >
              <Image
                src={linkImage}
                alt={`${project.name} github repository`}
                height={24}
                width={24}
              />
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}
