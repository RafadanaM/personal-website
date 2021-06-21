import React, { useRef } from "react";
import classes from "./Introduction.module.css";
import CircleProfile from "../../../components/CircleProfile/CircleProfile";
import useOnScreen from "../../../components/UseOnScreen";

function Introduction() {
  const ref = useRef();
  const isVisible = useOnScreen(ref)
  return (
    <section ref={ref} id="/" className={classes.personalInformationContainer}>
        <div className={classes.circleAvatarContainer}>
            <CircleProfile isVisible={isVisible} />
        </div>
        <div
          className={`${classes.name} ${isVisible && classes.visible}`}
          style={{ flexGrow: 1 }}
        >
          <h1 className={`${classes.initialName} ${isVisible && classes.firstname}`} >MUHAMMAD</h1>
          <h1 className={`${classes.initialName} ${isVisible && classes.middlename}`}>RAFADANA</h1>
          <h1 className={`${classes.initialName} ${isVisible && classes.lastname}`}>MOUNTHEIRA</h1>
        </div>
    </section>
  );
}

export default Introduction;
