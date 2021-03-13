import React, { useRef } from "react";
// import useOnScreen from "../../../components/UseOnScreen";
import classes from "./Contact.module.css";
import discord from "../../../images/discord.png";
import steam from "../../../images/steam.png";
import email from "../../../images/email.png";
import linkedin from "../../../images/linkedin.png";
import github from "../../../images/github.png";
import twitter from "../../../images/twitter.png";

const Contact = () => {
  const ref = useRef();
  //   const isVisible = useOnScreen(ref);

  const openLink = (link) => {
    window.open(link);
  };
  return (
    <section ref={ref} id="/contact">
      <div className={classes.contactContainer}>
        <div className={classes.contactItem}>
          <h2>CONTACT</h2>
          <div className={classes.iconsContainer}>
            <img
              src={email}
              alt="email"
              onClick={() => openLink("mailto: rafadanaM@gmail.com")}
            />
            <img
              src={twitter}
              alt="twitter"
              onClick={() => openLink("https://twitter.com/Rafadanaaa")}
            />
            <img
              src={github}
              alt="github"
              onClick={() => openLink("https://github.com/RafadanaM")}
            />
            <img
              src={linkedin}
              alt="linkedin"
              onClick={() =>
                openLink(
                  "https://www.linkedin.com/in/muhammad-rafadana-b956641b2/"
                )
              }
            />
            <img
              src={steam}
              alt="steam"
              onClick={() =>
                openLink("https://steamcommunity.com/id/that1retard/")
              }
            />
            <img
              src={discord}
              alt="discord"
              onClick={() =>
                openLink("https://discordapp.com/users/253470894230470656")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
