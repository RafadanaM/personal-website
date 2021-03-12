import React, { useRef } from "react";

import classes from "../../Home.module.css";
import styles from "./Description.module.css";
import StaggeredName from "../../../components/StaggeredNames/StaggeredName/StaggeredName";
import useOnScreen from "../../../components/UseOnScreen";

function Description() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <section
      ref={ref}
      id="/about"
      className={`${classes.smooth} ${classes.descriptionSection}  `}
    >
      <div className={classes.descriptionContainer}>
        {console.log(isVisible)}
        <div className={classes.descriptionInner}>
          <div className={`${classes.descriptionItem} ${styles.about}`}>
            <StaggeredName
              type={"vertical"}
              open={isVisible}
              row={true ? 1 : 0}
              delay={500}
              start={20}
              withheight={false ? 1 : 0}
              className={styles.rotate}
            >
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>U</span>
              <span>T</span>
            </StaggeredName>
          </div>
          <div className={`${classes.descriptionItem}`}>
            <StaggeredName
              type={"horizontal"}
              open={isVisible}
              row={false ? 1 : 0}
              delay={750}
              start={600}
              withheight={false ? 1 : 0}
            >
              <h3>
                HI!, my name is Muhammad Rafadana Mountheira, I was born in 22nd
                December 1999. My hobbies include:
              </h3>
              <div>
                <br />
                <ul>
                  <li>Football</li>
                  <li>Programming</li>
                  <li>Games</li>
                </ul>
              </div>
            </StaggeredName>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
