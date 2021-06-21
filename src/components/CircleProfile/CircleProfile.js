import React from "react";
import classes from "./CircleProfile.module.css";
import profile from "../../images/profile.jpg";


function CircleProfile({isVisible}) {
  
  return (
    <img  className={`${classes.imageDecoration} ${isVisible && classes.appear}`} src={profile} alt="Profile" />
  );
}

export default CircleProfile;
