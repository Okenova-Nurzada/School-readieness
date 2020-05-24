import React, { useState, useEffect } from "react";
import StationeryKit from "../../components/StationeryBuilder/StationeryKit/StationeryKit";
import StationeryControls from "../../components/StationeryBuilder/StationeryControls/StationeryControls";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./StationeryBuilder.module.css";
import OrderSummary from "../../components/StationeryBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
const PRICES = {
  notebook: 10,
  pen: 5,
  pencil: 10,
  eraser: 20,
  ruler: 20,
  scissors: 25,
};
export default withErrorHandler(() => {
  const [items, setItems] = useState(null);
  const [price, setPrice] = useState(10);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);


  function checkCanOrder(items) {
    const total = Object.keys(items).reduce((total, item) => {
      return total + items[item];
    }, 0);
    setCanOrder(total > 0);
  }
  function startOrder() {
    setIsOrdering(true);
  }
  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    const order = {
      items: items,
      price: price,
      delivery: "Fast",
      customer: {
        name: "Umar",
        phone: "0702105830",
        address: {
          street: "14 Lenina",
          city: "Karakol",
        },
      },
    };
    setLoading(true);
    axios.post("/orders.json", order).then((response) => {
      setLoading(false);
      setIsOrdering(false);
    });
  }

  function addItems(type) {
    const newItems = { ...items };
    newItems[type]++;
    setItems(newItems);
    checkCanOrder(newItems);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeItems(type) {
    if (items[type] >= 1) {
      const newItems = { ...items };
      newItems[type]--;
      setItems(newItems);
      checkCanOrder(newItems);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  useEffect(() => {
    axios.get("/items.json")
     .then((response) => setItems(response.data))
    .catch((error) => {});
  }, []);

  let output = <Spinner />;
  if (items) {
    output = (
      <>
        <StationeryKit price={price} items={items} />
        <StationeryControls
          startOrder={startOrder}
          canOrder={canOrder}
          items={items}
          addItems={addItems}
          removeItems={removeItems}
        />
      </>
    );
  }

  let orderSummary = <Spinner />;
  if (isOrdering && !loading) {
    orderSummary = (
      <OrderSummary
        items={items}
        finishOrder={finishOrder}
        cancelOrder={cancelOrder}
        price={price}
      />
    );
  }

  return (
    <div className={classes.StationeryBuilder}>
      {output}
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
