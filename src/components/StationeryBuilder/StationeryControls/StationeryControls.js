import React from 'react';
import classes from './StationeryControls.module.css';
import StationeryControl from './StationeryControl/StationeryControl';
const CONTROLS = [
    { label: "Album,Paint", type: "album,paint" },
    { label: "Notebook", type: "notebook" },
    { label: "Pencil", type: "pencil" },
    { label: "Eraser", type: "eraser" },
    { label: "Ruler,Compass", type: "ruler,compass" },
    { label: "Scotch", type: "scotch" },
];
export default ({ addItems, removeItems }) => {

    const controlsOutput = CONTROLS.map(control => <StationeryControl control={control} addItems={addItems} removeItems={removeItems} />);

    return (
        <div className={classes.StationeryControls}>
            {controlsOutput}
        </div>
    );
}