import React from "react";
import "../App.css";

import Introduction from "./Sections/Introduction";
import Description from "./Sections/Description/Description";

function Home() {
  return (
    <div className="home">
      <Introduction />
      {/*<div style={{ height: "20vh" }}>HALLO</div>*/}

      <Description />
    </div>
  );
}

export default Home;
