import React from "react";
import "../App.css";

import classes from "./Home.module.css";
import StaggeredNames from "../components/StaggeredNames/StaggeredNames";

function Home() {
  return (
    <div className="home">
      <div className={classes.personalInformationContainer}>
        <div className={classes.personalInformationItem}>
          <StaggeredNames style={{ overflow: "hidden" }} />
        </div>
        <div className="personal-information-item">
          <p>HALO</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
