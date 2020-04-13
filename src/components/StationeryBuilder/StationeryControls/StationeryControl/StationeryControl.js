import React from 'react';
import classes from './StationeryControl.module.css'

export default ({ control, addItems, removeItems }) => (
    <div className={classes.StationeryControl}>
        <span className={classes.label}>{control.label}</span>
        <button className={classes.less} onClick={() => removeItems(control.type)}>Less</button>
        <button className={classes.more} onClick={() => addItems(control.type)}>More</button>
    </div>
)