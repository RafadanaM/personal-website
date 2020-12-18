import React from "react";
import "../App.css";
import Avatar from "react-avatar";

import classes from "./Home.module.css";
import StaggeredNames from "../components/StaggeredNames/StaggeredNames";

function Home() {
  return (
    <div className="home">
      <div className={classes.personalInformationContainer}>
        <div
          className={classes.personalInformationItem}
          style={{ backgroundColor: "green" }}
        >
          <Avatar size="300" round={true} name="Foo Bar" />
        </div>
        <div
          className={classes.personalInformationItem}
          style={{ flexGrow: 1 }}
        >
          <StaggeredNames />
        </div>

        <div
          className={classes.personalInformationContainer}
          style={{ backgroundColor: "red" }}
        >
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
          <p>HALO</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
