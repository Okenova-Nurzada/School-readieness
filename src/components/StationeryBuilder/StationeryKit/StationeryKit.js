import React from "react";
import Stationery from "./Stationery/Stationery";
import classes from "./StationeryKit.module.css";

export default ({ price, items }) => {
  let itemsOutput = [];

  Object.keys(items).forEach((item) => {
    for (let i = 0; i < items[item].quantity; i++) {
      itemsOutput.push(<Stationery key={item + i} type={item} />);
    }
  });

  return (
    <div className={classes.StationeryKit}>
      <div className={classes.imageStationeryKit}>{itemsOutput}</div>
      <div className={classes.price}> {price} som</div>
    </div>
  );
}
 
