"use client";

import Link from "next/link";

import AnimatedText from "@/packages/ui/components/AnimatedText";
import { useNavbar } from "@common/contexts/NavContext";
import Token from "@/packages/ui/constants";

function MobileNavSlider() {
  const { isOpen } = useNavbar();

  return (
    <div
      aria-hidden={isOpen ? "true" : "false"}
      className={`md:hidden p-4 fixed top-16 z-10 left-0 h-[calc(100vh-4rem)] w-screen bg-secondary transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav aria-label="primary">
        <ul className="flex flex-col gap-y-1 ">
          <li>
            <Link href="#home">
              <AnimatedText
                text="HOME"
                color={Token.colors.neutralDark}
                className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
              />
            </Link>
          </li>

          <li>
            <Link href="#about">
              <AnimatedText
                text="ABOUT"
                color={Token.colors.neutralDark}
                className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
              />
            </Link>
          </li>
          <li>
            <Link href="#career">
              <AnimatedText
                text="CAREER"
                color={Token.colors.neutralDark}
                className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
              />
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <AnimatedText
                text="PROJECTS"
                color={Token.colors.neutralDark}
                className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
              />
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <AnimatedText
                text="CONTACT"
                color={Token.colors.neutralDark}
                className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavSlider;
