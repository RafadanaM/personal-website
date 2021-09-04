import React, { useRef } from "react";
// import useOnScreen from "../../../components/UseOnScreen";
import discord from "../../images/discord.png";
import steam from "../../images/steam.png";
import email from "../../images/email.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import twitter from "../../images/twitter.png";
import ClickableIcon from "../../components/ClickableIcon";

const Contact = () => {
  const ref = useRef();
  //   const isVisible = useOnScreen(ref);

  const openLink = (link) => {
    window.open(link);
  };
  return (
    <section
      ref={ref}
      id="/contact"
      className="flex flex-col  justify-start items-center h-screen/2 text-white font-bold md:justify-center md:h-screen"
    >
      <h1 className="text-6xl m-6 md:text-7xl">CONTACT</h1>
      <div className="grid grid-cols-3 grid-rows-2 justify-evenly items-center mt-7 md:grid-cols-6 md:grid-rows-1">
        <ClickableIcon
          image={email}
          alt="email"
          onClick={() => openLink("mailto: rafadanaM@gmail.com")}
        />
        <ClickableIcon
          image={twitter}
          alt="twitter"
          onClick={() => openLink("https://twitter.com/Rafadanaaa")}
        />
        <ClickableIcon
          image={github}
          alt="github"
          onClick={() => openLink("https://github.com/RafadanaM")}
        />
        <ClickableIcon
          image={linkedin}
          alt="linkedin"
          onClick={() =>
            openLink("https://www.linkedin.com/in/muhammad-rafadana-b956641b2/")
          }
        />
        <ClickableIcon
          image={steam}
          alt="steam"
          onClick={() => openLink("https://steamcommunity.com/id/that1retard/")}
        />
        <ClickableIcon
          image={discord}
          alt="discord"
          onClick={() =>
            openLink("https://discordapp.com/users/253470894230470656")
          }
        />
      </div>
    </section>
  );
};

export default Contact;
