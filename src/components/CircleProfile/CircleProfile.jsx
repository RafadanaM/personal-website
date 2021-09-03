import React from "react";
import profile from "../../images/profile.jpg";

function CircleProfile({ isVisible }) {
  return <img className="rounded-full" src={profile} alt="Profile" />;
}

export default CircleProfile;
