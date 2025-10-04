import Token from "@/packages/ui/constants";
import Link from "next/link";

interface Props {
  company?: string;
  title?: string;
  time?: string;
}

export default function CareerItem({ company, title, time }: Props) {
  return (
    <li className="relative w-full">
      {!!company && (
        <div className="absolute -top-9 md:-top-10 left-0">
          <h3 className="font-bold text-2xl md:text-3xl">
            <Link
              href={"https://www.linkedin.com/company/traveloka"}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {company}
            </Link>
          </h3>
        </div>
      )}
      <div
        style={{
          filter: `drop-shadow(-2px 4px 0 ${Token.colors.accent})`,
        }}
      >
        <div
          className="bg-primary py-4 md:py-6 px-6 md:px-14"
          style={{
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
          }}
        >
          {title ? (
            <p className="text-neutral-dark font-bold md:text-lg">
              {"Web Software Engineer, Accommodation"}
            </p>
          ) : (
            <div className="flex items-center gap-x-3 h-5 md:h-6 justify-center">
              <BlackBox />
              <BlackBox />
              <BlackBox />
            </div>
          )}
        </div>
      </div>

      {!!time && (
        <div className="absolute right-0 -bottom-9">
          <p className="font-bold text-lg md:text-xl">{time}</p>
        </div>
      )}
    </li>
  );
}

function BlackBox() {
  return <div className="w-3 h-3 bg-neutral-dark" />;
}
