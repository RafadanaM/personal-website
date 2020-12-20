import React, { useState } from "react";
import "../App.css";
import Avatar from "react-avatar";
import CircleProfile from "../components/CircleProfile/CircleProfile";
import classes from "./Home.module.css";
import StaggeredNames from "../components/StaggeredNames/StaggeredNames";
import StaggeredName from "../components/StaggeredNames/StaggeredName/StaggeredName";
import Introduction from "./Sections/Introduction";
import Description from "./Sections/Description";

function Home() {
  return (
    <div className="home">
      <Introduction />
      <Description />
    </div>
  );
}

export default Home;
