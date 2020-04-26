import React from "react";
import Backdrop from "./Backdrop.module.css";
import classes from "./Backdrop.module.css";

export default ({ show }) => (
     show ? <div className={classes.Backdrop}></div> :null
);

