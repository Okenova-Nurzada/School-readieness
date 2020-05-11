import React from "react";
import logo from "../../../assets/Logo-1.jpg";
import classes from "./Logo.module.css";

export default () => (
  <div className={classes.logo}>
    <img src={logo} alt="School bag logo" />
    <span>School bag</span>
  </div>
);
