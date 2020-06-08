import React from "react";
import classes from "./StationeryControls.module.css";
import StationeryControl from "./StationeryControl/StationeryControl";
import Button from "../../UI/Button/Button";

export default ({ canOrder, items, startOrder }) => {
  const controlsOutput = Object.keys(items).map((item) => (
    <StationeryControl
      key={item}
      item={item}
      label={items[item].label}
      disabled={items[item].quantity === 0}
    />
  ));

  return (
    <div className={classes.StationeryControls}>
      {controlsOutput}

      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
