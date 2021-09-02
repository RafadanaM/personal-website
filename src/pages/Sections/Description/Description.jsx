import React, { useRef } from "react";
import classes from "./Description.module.css";

function Description() {
  const ref = useRef();

  return (
    <section ref={ref} id="/about" className={`${classes.descriptionSection}`}>
      <div className={`${classes.descriptionLeft}`}>
        <div className={classes.rotate}>
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </div>
      </div>
      <div className={classes.descriptionRight}>
        <div className={`${classes.descriptionItem}`}>
          <h3>
            HI! I'm Muhammad Rafadana Mountheira, a Computer Science student at
            University of Queensland.
          </h3>
          <br />
          <h3>My hobbies include:</h3>
          <div>
            <ul>
              <li>Football</li>
              <li>Programming</li>
              <li>Games</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className={classes.descriptionInner}>
        <div className={`${classes.descriptionItem}`}>
          <h3>
            HI! I'm Muhammad Rafadana Mountheira, a Computer Science student at
            University of Queensland.
          </h3>
          <br />
          <h3>My hobbies include:</h3>
          <div>
            <ul>
              <li>Football</li>
              <li>Programming</li>
              <li>Games</li>
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Description;
