import React, { useState } from "react";

import classes from "../Home.module.css";

function Description() {
  return (
    <section id="/about" className={classes.smooth}>
      <div className={classes.descriptionContainer}>
        <div
          className={classes.personalInformationItem}
          style={{ flexGrow: 1 }}
        >
          <p>
            HI!, my name is Muhammad Rafadana Mountheira, I was born in 22nd
            December 1999. Currently, I’m studying Computer Science at
            Universitas Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}

export default Description;
