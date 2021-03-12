import React from "react";
import classes from "./CircleProfile.module.css";
import profile from "../../images/profile.jpg";

function CircleProfile() {
  return (
    <img className={classes.imageDecoration} src={profile} alt="Profile" />
  );
}

export default CircleProfile;
