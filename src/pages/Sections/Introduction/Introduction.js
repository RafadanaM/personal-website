import React from "react";
import classes from "./Introduction.module.css";
import StaggeredName from "../../../components/StaggeredNames/StaggeredName/StaggeredName";
import CircleProfile from "../../../components/CircleProfile/CircleProfile";
import StaggeredNames from "../../../components/StaggeredNames/StaggeredNames";

function Introduction() {
  return (
    <section id="/">
      <div className={classes.personalInformationContainer}>
        <div className={classes.circleAvatarContainer}>
          <StaggeredName open={true} start={-1000} type={"vertical"}>
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
