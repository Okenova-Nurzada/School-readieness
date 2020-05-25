import React from "react";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";

export default () => {
  const items = {
    pen: 2,
    notebook: 3,
    pencil: 3,
    scissors: 3,
    ruler: 3,
    eraser: 2,
  };
  const price = 123;

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary items={items} price={price} />
    </div>
  );
};
