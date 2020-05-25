import React from "react";
import classes from "./CheckoutSummary.module.css";
import StationeryKit from "../../StationeryBuilder/StationeryKit/StationeryKit";
import Button from "../../UI/Button/Button"

export default ({ price,items }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <StationeryKit  price={price} items= {items}/>
      <Button green>Continue></Button>
      <Button red>Cancel</Button>
    </div>
  );
};
