import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Route } from "react-router-dom";
import axios from "../../axios";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Checkout.module.css";

export default withErrorHandler(() => {
  const history = useHistory();
  const location = useLocation();
  const [items, setItems] = useState({});
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

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

  function checkoutFinish(data) {
    setLoading(true);
    axios
      .post("/orders.json", {
        items,
        price,
        details: data,
      })
      .then((response) => {
        setLoading(false);
        history.replace("/");
      });
  }

  let formOutput = <Spinner />;
  if (!loading) {
    formOutput = <CheckoutForm checkoutFinish={checkoutFinish} />;
  }

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        items={items}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
      <Route path="/checkout/form">{formOutput}</Route>
    </div>
  );
}, axios);
