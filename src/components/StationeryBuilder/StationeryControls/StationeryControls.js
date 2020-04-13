import React from 'react';
import classes from './StationeryControls.module.css';
import StationeryControl from './StationeryControl/StationeryControl';

export default ({ addItems, removeItems }) => {
    const controls = [
        { label: "Book", type: "book" },
        { label: "Notebook", type: "notebook" },
        { label: "Pencil", type: "pencil" },
    ];
    const controlsOutput = controls.map(control => <StationeryControl control={control} addItems={addItems} removeItems={removeItems} />);
    return (
        <div className={classes.StationeryControls}>
            {controlsOutput}
        </div>
    );
}