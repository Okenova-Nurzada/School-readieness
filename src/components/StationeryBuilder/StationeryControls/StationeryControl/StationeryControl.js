import React from "react";
import classes from "./StationeryControl.module.css";

export default ({ control, addItems, removeItems, disabled }) => (
  <div className={classes.StationeryControl}>
    <button
      className={classes.less}
      onClick={() => removeItems(control.type)}
      disabled={disabled}
    >
      -
    </button>
    <span className={classes.label}>{control.label}</span>
    <button className={classes.more} onClick={() => addItems(control.type)}>
      +
    </button>
  </div>
);
