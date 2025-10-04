import Section from "@common/components/Section";
import Container from "@common/components/Container";
import AnimatedText from "@/packages/ui/components/AnimatedText";
import Token from "@/packages/ui/constants";

import mail from "@images/mail.svg";
import linkedin from "@images/linkedin.svg";
import github from "@images/github.svg";
import twitter from "@images/twitter.svg";
import Link from "next/link";
import Image from "next/image";

interface IContact {
  id: string;
  src: string;
  href: string;
}

export const contacts: IContact[] = [
  {
    id: "Email",
    src: mail,
    href: "mailto:m.mountheira@uqconnect.edu.au, muhammad.rafadana@ui.ac.id",
  },
  {
    id: "Linkedin",
    src: linkedin,
    href: "https://www.linkedin.com/in/muhammad-rafadana/",
  },
  {
    id: "Github",
    src: github,
    href: "https://github.com/RafadanaM",
  },
  {
    id: "Twitter",
    src: twitter,
    href: "https://twitter.com/Rafadanaaa",
  },
];

function ContactSection() {
  return (
    <Section id="contact">
      <Container className="flex-1 flex flex-col justify-center gap-y-12 py-16 px-4 md:px-8">
        <AnimatedText
          text="CONTACT"
          as="h2"
          color={Token.colors.primary}
          className="text-center text-[clamp(3.5rem,12vw,8rem)] font-bold"
        />

        <ul className="mx-auto flex justify-center items-center gap-4 md:gap-8">
          {contacts.map((contact) => {
            return <ContactItem key={contact.id} data={contact} />;
          })}
        </ul>
      </Container>
    </Section>
  );
}

export default ContactSection;

interface ContactItemProps {
  data: IContact;
}

function ContactItem({ data }: ContactItemProps) {
  return (
    <li className="p-2 md:p-4 transition rounded-md hover:bg-neutral-light/15 hover:scale-110">
      <Link
        href={data.href}
        aria-label={data.id}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="w-12 h-12 md:w-16 md:h-16"
          src={data.src}
          alt={data.id}
        />
      </Link>
    </li>
  );
}
