import React from "react";
import classes from "./CheckoutSummary.module.css";
import StationeryKit from "../../StationeryBuilder/StationeryKit/StationeryKit";
import Button from "../../UI/Button/Button";

export default ({ price, items, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <StationeryKit price={price} items={items} />
      <Button click={checkoutCancel} red>
        Cancel
      </Button>
      <Button click={checkoutContinue} green>
        Continue
      </Button>
    </div>
  );
};
