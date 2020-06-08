import React from "react";
import classes from "./Order.module.css";



export default ({ price, items, details }) => {
  const itemsOutput = Object.keys(items).map((item) => (
    <span key={item} className={classes.item}>
      {items[item].label} ({items[item].quantity})
    </span>
  ));

  return (
    <div className={classes.Order}>
      <div className={classes.details}>
        {details.name}, {details.phone}, {details.address}
      </div>
      <div className={classes.price}>{price} som</div>
      <div className={classes.items}>{itemsOutput}</div>
    </div>
  );
};
