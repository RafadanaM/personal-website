import React, { useState } from "react";
import "../App.css";
import Avatar from "react-avatar";
import CircleProfile from "../components/CircleProfile/CircleProfile";
import classes from "./Home.module.css";
import StaggeredNames from "../components/StaggeredNames/StaggeredNames";
import StaggeredName from "../components/StaggeredNames/StaggeredName/StaggeredName";

function Home() {
  const [open, setOpen] = useState(true);

  return (
    <div className="home">
      <section id="/" className={classes.smooth}>
        <div className={classes.personalInformationContainer}>
          <div className={classes.circleAvatarContainer}>
            <StaggeredName open={open} start={1000} vertical={true}>
              <CircleProfile />
            </StaggeredName>
          </div>
          <div
            className={classes.personalInformationItem}
            style={{ flexGrow: 1 }}
          >
            <StaggeredNames />
          </div>
        </div>
      </section>
      <section id="/about" className={classes.smooth}>
        <div
          className={classes.descriptionContainer}
          style={{ backgroundColor: "blue" }}
        >
          <div
            className={classes.personalInformationItem}
            style={{ flexGrow: 1 }}
          >
            <p>
              HI!, my name is Muhammad Rafadana Mountheira, I was born in 22nd
              December 1999. Currently, I’m studying Computer Science at
              Universitas Indonesia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
