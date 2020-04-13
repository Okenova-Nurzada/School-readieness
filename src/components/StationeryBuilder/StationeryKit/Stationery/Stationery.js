import React from 'react';
import classes from './Stationery.module.css';

export default ({ type }) => {
    const stationeryClasses = [classes.Stationery]
    switch (type) {
        case 'pencil':
            stationeryClasses.push(classes.pencil);
            break;
        case 'notebook':
            stationeryClasses.push(classes.notebook);
            break;
        case 'pencil':
            stationeryClasses.push(classes.pencil);
            break;
        case 'book':
            stationeryClasses.push(classes.book);
        default:
            break;
        case 'pencil':
            stationeryClasses.push(classes.pencil);
            break;
    };

    return (
        <div className={stationeryClasses.join(' ')}>
        </div>
    );

}