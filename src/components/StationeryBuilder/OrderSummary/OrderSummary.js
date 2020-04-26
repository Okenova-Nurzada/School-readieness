import React from "react";
import classes from "./OrderSummary.module.css";

const LABELS = {
  snack: "Snack",
  notebook: "Notebook",
  pen: "Pen",
  eraser: "Eraser",
  ruler: "Ruler",
  scissors: "Scissors",
};

export default ({ items }) => {
  const itemsOutput = Object.keys(items)
    .filter((item) => items[item] > 0)
    .map((item) => (
      <li>
        {LABELS[item]}:{items[item]}
      </li>
    ));
  return (
    <div className={classes.OrderSummary}>
      <h2>Your order!</h2>
      <p>Congratulation! You've built a best stationery of all time!</p>
      <ul>{itemsOutput}</ul>
      <p>Would you like to checkbot?</p>
    </div>
  );
};
