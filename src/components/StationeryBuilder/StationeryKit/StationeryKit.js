import React from 'react';
import Stationery from './Stationery/Stationery'
import classes from "./StationeryKit.module.css"

export default () => ( 
<div className={classes.StationeryKit}>
<Stationery  type="book"/>
<Stationery type="pencil" />
<Stationery  type="book"/>
<Stationery type="pencil" />
<Stationery  type="notebook" />
<Stationery type="pencil" />
<Stationery  type="notebook" />




</div>
);


