import React, { useState } from "react";
import StaggeredName from "./StaggeredName/StaggeredName";
import classes from "./StaggeredNames.module.css";

function StaggeredNames() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <StaggeredName
        className={classes.staggeredName}
        open={open}
        start={-1000}
        type={"horizontal"}
        onClick={() => setOpen((state) => !state)}
      >
        <hr className={classes.lineTop} />
      </StaggeredName>
      <StaggeredName
        delay={750}
        type={"horizontal"}
        className={classes.staggeredName}
        open={open}
        start={-1000}
        onClick={() => setOpen((state) => !state)}
      >
        <h1 className={classes.firstname}>MUHAMMAD</h1>
      </StaggeredName>
      <StaggeredName
        delay={750}
        type={"horizontal"}
        className={classes.staggeredName}
        open={open}
        start={1000}
        onClick={() => setOpen((state) => !state)}
      >
        <h1 className={classes.middlename}>RAFADANA</h1>
      </StaggeredName>
      <StaggeredName
        delay={750}
        type={"horizontal"}
        className={classes.staggeredName}
        open={open}
        start={-1000}
        onClick={() => setOpen((state) => !state)}
      >
        <h1 className={classes.lastname}>MOUNTHEIRA</h1>
      </StaggeredName>
      <StaggeredName
        type={"horizontal"}
        className={classes.staggeredName}
        open={open}
        start={1000}
        onClick={() => setOpen((state) => !state)}
      >
        <hr className={classes.lineBottom} />
      </StaggeredName>
    </>
  );
}

export default StaggeredNames;
