import { PropsWithChildren } from "react";

interface IContainerProps {
  className?: string;
}

function Container({
  className,
  children,
}: PropsWithChildren<IContainerProps>) {
  return (
    <div className={`w-[min(100%,1440px)] mx-auto ${className ?? ""}`}>
      {children}
    </div>
  );
}

export default Container;
