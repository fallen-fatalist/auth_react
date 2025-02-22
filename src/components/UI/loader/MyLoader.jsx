import React from "react";
import classes from "./MyLoader.module.css";

const Loader = ({loaderText}) => {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loaderRing}></div> {/* Rotating part */}
      <div className={classes.loaderText}>{loaderText}</div> {/* Static content */}
    </div>
  );
};

export default Loader;
