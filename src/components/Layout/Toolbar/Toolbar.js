import React from 'react';
import Logo from "./Logo/Logo";
import Nav from './Nav/Nav';
import classes from './Toolbar.module.css';

export default () => ( 
<div className={classes.Toolbar}>
 <Logo />
 <Nav />
</div>
);