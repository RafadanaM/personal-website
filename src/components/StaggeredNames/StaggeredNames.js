import React, { useState } from "react";
import StaggeredName from "./StaggeredName/StaggeredName";

function StaggeredNames() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <StaggeredName
        open={open}
        start={-1000}
        e
        onClick={() => setOpen((state) => !state)}
      >
        <h1 className="firstname">MUHAMMAD</h1>
      </StaggeredName>
      <StaggeredName
        open={open}
        start={1000}
        e
        onClick={() => setOpen((state) => !state)}
      >
        <h1 className="middlename">RAFADANA</h1>
      </StaggeredName>
      <StaggeredName
        open={open}
        start={-1000}
        e
        onClick={() => setOpen((state) => !state)}
      >
        <h1 className="lastname">MOUNTHEIRA</h1>
      </StaggeredName>
    </>
  );
}

export default StaggeredNames;
