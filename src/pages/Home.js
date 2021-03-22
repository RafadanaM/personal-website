import React from "react";
import "../App.css";

import Introduction from "./Sections/Introduction/Introduction";
import Description from "./Sections/Description/Description";
import Contact from "./Sections/Contact/Contact";

function Home() {
  return (
    <div className="home">
      <Introduction />
      <Description />
      <Contact />
    </div>
  );
}

export default Home;
