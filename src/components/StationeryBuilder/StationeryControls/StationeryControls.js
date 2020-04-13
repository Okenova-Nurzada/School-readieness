import React from 'react';
import classes from './StationeryControls.module.css';
import StationeryControl from './StationeryControl/StationeryControl';

export default () => {
    const controls = [
        { label: "Book", type: "book" },
        { label: "Notebook", type: "notebook" },
        { label: "Pencil", type: "pencil" },
    ];
    const controlsOutput = controls.map(control => <StationeryControl label={control.label} />);
    return (
        <div className={classes.StationeryControls}>
           {controlsOutput}
        </div>
    );
}