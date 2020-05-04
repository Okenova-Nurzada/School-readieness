import React from "react";
import classes from "./Stationery.module.css";

export default ({ type }) => {
  const stationeryClasses = [classes.Stationery, classes[type]];

  return <div className={stationeryClasses.join(" ")}></div>;
};
