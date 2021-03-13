import React, { useRef } from "react";
import useOnScreen from "../../../components/UseOnScreen";
import classes from "../../Home.module.css";

const Contact = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <section
      ref={ref}
      id="/contact"
      className={`${classes.descriptionSection}  `}
    >
      <div>HI</div>
    </section>
  );
};

export default Contact;
