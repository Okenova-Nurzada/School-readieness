import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";

const LABELS = {
  pencil: "Pencil",
  notebook: "Notebook",
  pen: "Pen",
  eraser: "Eraser",
  ruler: "Ruler",
  scissors: "Scissors",
};

export default ({ items, cancelOrder, finishOrder }) => {
  const itemsOutput = Object.keys(items)
    .filter((item) => items[item] > 0)
    .map((item) => (
      <li key={items}>
        {LABELS[item]}:{items[item]}
      </li>
    ));
  return (
    <div className={classes.OrderSummary}>
      <h2>Your order.</h2>
      <p>Congratulation! You've built a best stationery of all time!</p>
      <ul>{itemsOutput}</ul>
      <p>Would you like to checkbot?</p>
      <Button click={finishOrder} green>
        Checkout
      </Button>
      <Button click={cancelOrder} red>
        Cancel
      </Button>
    </div>
  );
};
