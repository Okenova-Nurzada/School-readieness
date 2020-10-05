import React from "react";
import classes from "./Order.module.css";



export default ({ price, items, details }) => {
  const itemsOutput = Object.keys(items).map((item) => (
    <span key={item} className={classes.item}>
      {items[item].label} ({items[item].quantity})
    </span>
  ));

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name + ", " + details.phone + ", " + details.address
        : "No details available"}
    </div>
  );



  return (
    <div className={classes.Order}>

      {detailsOutput}

      <div className={classes.price}>{price.toFixed(2)} som </div>
      <div className={classes.items}>{itemsOutput}</div>
    </div>
  );
};
