import React, { useState } from "react";
import StationeryKit from "../../components/StationeryBuilder/StationeryKit/StationeryKit";
import StationeryControls from "../../components/StationeryBuilder/StationeryControls/StationeryControls";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./StationeryBuilder.module.css";
import OrderSummary from "../../components/StationeryBuilder/OrderSummary/OrderSummary";
const PRICES = {
  notebook: 10,
  pen: 5,
  pencil: 10,
  eraser: 20,
  ruler: 20,
  scissors: 25,
};
export default () => {
  const [items, setItems] = useState({
    notebook: 0,
    pen: 0,
    pencil: 0,
    eraser: 0,
    ruler: 0,
    scissors: 0,
  });
  const [price, setPrice] = useState(10);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);

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
    alert("You are on tte checkout page!");
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

  return (
    <div className={classes.StationeryBuilder}>
      <StationeryKit price={price} items={items} />
      <StationeryControls
        startOrder={startOrder}
        items={items}
        canOrder={canOrder}
        addItems={addItems}
        removeItems={removeItems}
      />
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        <OrderSummary
          items={items}
          finishOrder={finishOrder}
          cancelOrder={cancelOrder}
        />
      </Modal>
    </div>
  );
};
