import React from "react";
import "../App.css";

import Introduction from "./Sections/Introduction/Introduction";
import Description from "./Sections/Description/Description";
import Contact from "./Sections/Contact/Contact";

function Home() {
  return (
    <div className="home">
      <Introduction />
      {/*<div style={{ height: "20vh" }}>HALLO</div>*/}

      <Description />
      <Contact />
    </div>
  );
}

export default Home;
