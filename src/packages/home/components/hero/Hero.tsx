import Link from "next/link";
import Image from "next/image";

import Token from "@/packages/ui/constants";
import Container from "@common/components/Container";
import Section from "@common/components/Section";
import ChevronDownIcon from "@images/chevron-double-down.svg";

function HeroSection() {
  return (
    <Section id="main">
      <Container className="flex-1 py-20 px-4 2xl:px-0 h-full gap-4 flex flex-col justify-center items-start">
        <div className="flex flex-col gap-y-8 items-start my-auto md:my-0">
          <h1
            className="uppercase from-neutral-dark leading-none text-[clamp(3.5rem,12vw,8rem)] font-bold text-primary text-left whitespace-pre-line "
            style={{
              textShadow: "0px 0px 10px rgba(255, 200, 61, 0.5)",
            }}
          >
            {"Muhammad\nRafadana\nMountheira"}
          </h1>

          <div
            style={{ boxShadow: `5px 4px ${Token.colors.accent}` }}
            className="py-1.5 md:py-2 px-2 md:px-4 bg-primary"
          >
            <p className="text-[clamp(1rem,2vw,1.5rem)] text-neutral-dark font-semibold text-center">
              {"Web Software Engineer"}
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-y-3 md:hidden" aria-label="primary">
          <HeroLink label="About" href="#about" />
          <HeroLink label="Career" href="#career" />
          <HeroLink label="Projects" href="#projects" />
          <HeroLink label="Contact" href="#contact" />
        </nav>

        <Image
          alt="Scroll Down"
          src={ChevronDownIcon}
          width={48}
          height={48}
          className="absolute bottom-20 left-[50%] -translate-x-[50%] animate-bounce hidden md:block"
        />
      </Container>
    </Section>
  );
}

export default HeroSection;

interface HeroLinkProps {
  label: string;
  href: string;
}

function HeroLink({ label, href }: HeroLinkProps) {
  return (
    <Link
      href={href}
      className="capitalize bg-transparent text-neutral-light font-bold text-2xl px-3 py-0.5 w-max leading-snug text-[clamp(1.5rem,4.5vw,2.5rem)]"
      style={{
        boxShadow: `inset 2px 0px 0px 0px ${Token.colors.primary}`,
      }}
    >
      {label}
    </Link>
  );
}
