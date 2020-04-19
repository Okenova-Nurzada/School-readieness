import React from 'react';
import classes from './StationeryControls.module.css';
import StationeryControl from './StationeryControl/StationeryControl';
const CONTROLS = [
    { label: "Album", type: "album" },
    { label: "Notebook", type: "notebook" },
    { label: "Pencil", type: "pencil" },
    { label: "Eraser", type: "eraser" },
    { label: "Ruler", type: "ruler" },
    { label: "Scotch", type: "scotch" },
];
export default ({ items, addItems, removeItems }) => {

    const controlsOutput = CONTROLS.map(control => <StationeryControl control={control}
        addItems={addItems}
        removeItems={removeItems}
        disabled={items[control.type] === 0} />);

    return (
        <div className={classes.StationeryControls}>
            {controlsOutput}
        </div>
    );
}