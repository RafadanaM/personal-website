import "../App.css";
import "./Home.css";
import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="personal-information-container">
        <div
          className="personal-information-item"
          style={{ backgroundColor: "blue" }}
        >
          <div style={{ textAlign: "center" }}>HALO</div>
          <div style={{ textAlign: "center" }}>HALO</div>
          <div style={{ textAlign: "center" }}>HALO</div>
          <div style={{ textAlign: "center" }}>HALO</div>
        </div>
        <div className="personal-information-item">
          <p>HALO</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
