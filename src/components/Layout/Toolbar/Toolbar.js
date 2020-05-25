import React from "react";
import Logo from "../../UI/Logo/Logo";
import Nav from "../../UI/Nav/Nav";
import DrawerToggle from "../Drawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";

export default ({ toggleDrawer }) => (
  <div className={classes.Toolbar}>
    <Logo />
    <nav>
      <Nav />
    </nav>
    <DrawerToggle toggleDrawer={toggleDrawer} />
  </div>
);
