import React from "react";
import "../App.css";

import Introduction from "./Sections/Introduction";
import Description from "./Sections/Description";
import Contact from "./Sections/Contact";

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
