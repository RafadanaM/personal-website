import React, { useState } from "react";
import classes from "../Home.module.css";
import StaggeredName from "../../components/StaggeredNames/StaggeredName/StaggeredName";
import CircleProfile from "../../components/CircleProfile/CircleProfile";
import StaggeredNames from "../../components/StaggeredNames/StaggeredNames";

function Introduction() {
  const [open, setOpen] = useState(true);

  return (
    <section id="/" className={classes.smooth}>
      <div className={classes.personalInformationContainer}>
        <div className={classes.circleAvatarContainer}>
          <StaggeredName open={open} start={1000} vertical={+true}>
            <CircleProfile />
          </StaggeredName>
        </div>
        <div
          className={classes.personalInformationItem}
          style={{ flexGrow: 1 }}
        >
          <StaggeredNames />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
