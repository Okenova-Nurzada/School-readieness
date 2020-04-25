import React, { useState } from "react";
import StationeryKit from "../../components/StationeryBuilder/StationeryKit/StationeryKit";
import StationeryControls from "../../components/StationeryBuilder/StationeryControls/StationeryControls";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./StationeryBuilder.module.css";
import OrderSummary from "../../components/StationeryBuilder/OrderSummary/OrderSummary";
const PRICES = {
  notebook: 10,
  pen: 5,
  snack: 45,
  eraser: 20,
  ruler: 20,
  scissors: 25,
};
export default () => {
  const [items, setItems] = useState({
    notebook: 0,
    pen: 0,
    snack: 0,
    eraser: 0,
    ruler: 0,
    scissors: 0,
  });
  const [price, setPrice] = useState(10);
  const [canOrder, setCanOrder] = useState(false);

  function checkCanOrder(items) {
    const total = Object.keys(items).reduce((total, item) => {
      return total + items[item];
    }, 0);
    setCanOrder(total > 0);
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
        items={items}
        canOrder={canOrder}
        addItems={addItems}
        removeItems={removeItems}
      />
      <Modal>
        <OrderSummary items={items}  />
      </Modal>
    </div>
  );
};
