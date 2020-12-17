import React, { useState } from "react";
import "../App.css";
import "./Home.css";
import StaggeredName from "../components/StaggeredName/StaggeredName";

function Home() {
  const [open, setOpen] = useState(true);
  return (
    <div className="home">
      <div className="personal-information-container">
        <div
          className="personal-information-item"
          style={{ backgroundColor: "blue" }}
        >
          <StaggeredName open={open} onClick={() => setOpen((state) => !state)}>
            <h1 className="firstname">MUHAMMAD</h1>
            <h1 className="middlename">RAFADANA</h1>
            <h1 className="lastname">MOUNTHEIRA</h1>
          </StaggeredName>
        </div>
        <div className="personal-information-item">
          <p>HALO</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
