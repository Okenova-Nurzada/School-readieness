import React from 'react';
import Stationery from './Stationery/Stationery';
import classes from "./StationeryKit.module.css";

export default ({items}) => {
let itemsOutput =  [] ;  

Object.keys(items).forEach(type => {
    for (let i= 0 ; i < items[type]; i++) {
        itemsOutput.push(<Stationery  key= {type + i} type ={type} />);
    }
     });
    

return (
    <div className={classes.StationeryKit}>
{itemsOutput}
</div>
);
}


