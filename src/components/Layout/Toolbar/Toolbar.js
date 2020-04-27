import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import classes from "./Toolbar.module.css";

export default () => (
  <div className={classes.Toolbar}>
    <Logo />
    <nav>
      <Navigation />
    </nav>
  </div>
);
