import React from "react";
import Logo from "../../UI/Logo/Logo";
import Navigation from "../../UI/Navigation/Navigation";
import classes from "./Toolbar.module.css";

export default () => (
  <div className={classes.Toolbar}>
    <Logo />
    <nav>
      <Navigation />
    </nav>
  </div>
);
