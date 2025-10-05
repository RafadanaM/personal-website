"use client";

import { useCallback } from "react";
import Link from "next/link";

import AnimatedText from "@/packages/ui/components/AnimatedText";
import { useNavbar } from "@common/contexts/NavContext";
import Token from "@/packages/ui/constants";

function MobileNavSlider() {
  const { isOpen, setIsOpen } = useNavbar();

  const handleNavPress = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div
      className={`md:hidden p-4 fixed top-16 z-10 left-0 h-[calc(100vh-4rem)] w-screen bg-secondary transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav aria-label="secondary">
        <ul className="flex flex-col gap-y-1 ">
          <li>
            <Link href="#home" onClick={handleNavPress}>
              <AnimatedText
                text="HOME"
                color={Token.colors.neutralDark}
                className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
              />
            </Link>
          </li>

          <li>
            <Link href="#about" onClick={handleNavPress}>
              <AnimatedText
                text="ABOUT"
                color={Token.colors.neutralDark}
                className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
              />
            </Link>
          </li>
          <li>
            <Link href="#career" onClick={handleNavPress}>
              <AnimatedText
                text="CAREER"
                color={Token.colors.neutralDark}
                className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
              />
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={handleNavPress}>
              <AnimatedText
                text="PROJECTS"
                color={Token.colors.neutralDark}
                className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
              />
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={handleNavPress}>
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
