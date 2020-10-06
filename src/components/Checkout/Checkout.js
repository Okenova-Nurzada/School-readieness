import React, { useState } from "react";
import { useHistory, Route } from "react-router-dom";
import axios from "../../axios";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import CheckoutForm from "./CheckoutSummary/Checkout/CheckoutForm/CheckoutForm";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useSelector } from "react-redux";
import classes from "./Checkout.module.css";

export default withErrorHandler(() => {
  const history = useHistory();
  const { items, price } = useSelector((state) => state.builder);
  const [loading, setLoading] = useState(false);

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
