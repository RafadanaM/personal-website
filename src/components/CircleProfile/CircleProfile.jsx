import React from "react";
import profile from "../../images/profile.jpg";

function CircleProfile({ isVisible }) {
  return (
    <img
      className={`bg-cover border-2 border-solid border-white rounded-full w-60 ${
        isVisible ? "opacity-100" : "opacity-0 transform -translate-y-52"
      }  md:w-72 transition duration-700 `}
      src={profile}
      alt="Profile"
    />
  );
}

export default CircleProfile;
