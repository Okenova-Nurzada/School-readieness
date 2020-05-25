import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  pen: "Pen",
  notebook: "Notebook",
  pencil: "Pencil",
  scissors: "Scissors",
  ruler: "Ruler",
  eraser: "Eraser",
};

export default ({ price, items, details }) => {
  const itemsOutput = Object.keys(items).map((key) => (
    <span key={key} className={classes.item}>
      {CONTROLS[key]} ({items[key]})
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
