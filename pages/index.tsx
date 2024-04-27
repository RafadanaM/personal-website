import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Intro from "../components/intro/Intro";
import { pageSections } from "../data/data";

export default function Index({
  isBot,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {pageSections.map(({ id, section: Element }) => (
        <Element key={id} id={id} />
      ))}
      <Intro shouldRun={!isBot} />
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const isBot = context.req.headers["user-agent"]?.includes("Googlebot");
  return { props: { isBot } };
}) satisfies GetServerSideProps<{ isBot?: boolean }>;
