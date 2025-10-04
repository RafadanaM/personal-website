import AnimatedText from "@/packages/ui/components/AnimatedText";
import Token from "@/packages/ui/constants";
import Container from "@common/components/Container";
import Section from "@common/components/Section";
import CareerItem from "./CareerItem";

export default function Career() {
  return (
    <Section id="career">
      <Container className="py-16 px-4 md:px-8">
        <AnimatedText
          text="CAREER"
          as="h2"
          color={Token.colors.primary}
          className="text-[clamp(3.5rem,12vw,8rem)] font-bold"
        />

        <ol className="flex flex-col items-center gap-y-24 my-44 w-max mx-auto">
          <CareerItem
            company="Traveloka"
            title="Web Software Engineer, Accommodation"
            time="July 2023 - Present"
          />
          <CareerItem />
          <CareerItem />
        </ol>
      </Container>
    </Section>
  );
}
