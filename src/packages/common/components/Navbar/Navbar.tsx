import Link from "next/link";

import Container from "../Container";
import AnimatedLines from "./AnimatedLines";
import HamburgerBar from "./HamburgerBar";

interface INavLink {
  label: string;
  href: string;
}

function Navbar() {
  return (
    <header className={`sticky top-0 left-0 bg-neutral-dark w-full z-10`}>
      <Container className="min-h-16 px-4 sm:px-8 flex items-center justify-between">
        <div className="w-8 h-8 md:hidden" />
        <Link href="/" className="font-bold text-3xl">
          {"Rafadana"}
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center">
            <NavLink label="home" href="#main" />
            <NavLink label="about" href="#about" />
            <NavLink label="career" href="#career" />
            <NavLink label="projects" href="#projects" />
            <NavLink label="contact" href="#contact" />
          </ul>
        </nav>

        <HamburgerBar />
      </Container>
      <AnimatedLines />
    </header>
  );
}

export default Navbar;

function NavLink({ label, href }: INavLink) {
  return (
    <li>
      <Link
        className="uppercase px-3 py-4 font-semibold text-lg hover:text-accent"
        href={href}
      >
        {label}
      </Link>
    </li>
  );
}
