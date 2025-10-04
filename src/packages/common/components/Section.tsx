import { PropsWithChildren } from "react";

type TVariant = "primary" | "secondary" | "dark" | "light";

interface ISectionProps {
  id?: string;
  variant?: TVariant;
  className?: string;
}

function Section({
  id,
  children,
  className = "",
}: PropsWithChildren<ISectionProps>) {
  return (
    <section
      id={id}
      className={`relative flex flex-col min-h-screen ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
