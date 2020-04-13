import React from 'react';
import classes from './StationeryControl.module.css'

export default ({ label }) => (
    <div className={classes.StationeryControl}>
        <span className={classes.label}>{label}</span>
        <button className={classes.less}>Less</button>
        <button className={classes.more}>More</button>
    </div>
)