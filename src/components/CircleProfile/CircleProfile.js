import React from "react";
import classes from "./CircleProfile.module.css"

function CircleProfile() {
    return (
        <img className={classes.imageDecoration} src="https://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" alt="Profile"  />
    );
}

export default CircleProfile;