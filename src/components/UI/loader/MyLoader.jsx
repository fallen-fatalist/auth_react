import React from "react";
import classes from "./MyLoader.module.css";

const Loader = ({message}) => {
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.loaderContainer}>
        <div className={classes.loaderRing}></div> {/* Rotating part */}
        <div className={classes.loaderText}>{message}</div> {/* Static content */}
      </div>
    </div>
  );
};

export default Loader;
