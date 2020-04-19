import React from 'react';
import Stationery from './Stationery/Stationery';
import classes from "./StationeryKit.module.css";

export default ({ price, items }) => {
    let itemsOutput = [];

    Object.keys(items).forEach(type => {
        for (let i = 0; i < items[type]; i++) {
            itemsOutput.push(<Stationery key={type + i} type={type} />);
        }
    });


    return (
        <div className={classes.StationeryKit}>
            <div className={classes.bento}> {itemsOutput}
            </div>
            <div className={classes.price}>  Totoal price {price} som 
            </div>
        </div>

    );
}


