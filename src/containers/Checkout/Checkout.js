import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Route } from "react-router-dom";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";

export default () => {
  const history = useHistory();
  const location = useLocation();
  const [items, setItems] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const newItems = {};
    query.forEach((value, key) => {
      if (key === "price") {
        setPrice(+value);
      } else {
        newItems[key] = +value;
      }
    });
    setItems(newItems);
  }, []);

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/form");
  }

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        items={items}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
      <Route path="/checkout/form">
        <CheckoutForm />
      </Route>
    </div>
  );
};
