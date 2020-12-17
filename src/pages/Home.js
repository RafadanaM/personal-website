import React, { useState } from "react";
import "../App.css";
import "./Home.css";
import StaggeredNames from "../components/StaggeredNames/StaggeredNames";

function Home() {
  return (
    <div className="home">
      <div className="personal-information-container">
        <div
          className="personal-information-item"
          style={{ backgroundColor: "blue" }}
        >
          <StaggeredNames />
        </div>
        <div className="personal-information-item">
          <p>HALO</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
