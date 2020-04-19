import React from 'react';
import classes from './StationeryControls.module.css';
import StationeryControl from './StationeryControl/StationeryControl';
const CONTROLS = [
    { label: "Sketchbook", type: "sketchbook" },
    { label: "Notebook", type: "notebook" },
    { label: "Pen", type: "pen" },
    { label: "Eraser", type: "eraser" },
    { label: "Ruler", type: "ruler" },
    { label: "Scissors", type: "scissors" },
];
export default ({ items, addItems, removeItems }) => {

    const controlsOutput = CONTROLS.map(control => <StationeryControl
        key={control.type}
        control={control}
        addItems={addItems}
        removeItems={removeItems}
        disabled={items[control.type] === 0} />);

    return (
        <div className={classes.StationeryControls}>
            {controlsOutput}
        </div>
    );
}