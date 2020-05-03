import React from "react";
import classes from "./DrawerToggle.module.css";

export default ({ toggleDrawer }) => (
  <div clasaName={classes.DrawerToggle} onClick={toggleDrawer}>
    Menu
  </div>
);
