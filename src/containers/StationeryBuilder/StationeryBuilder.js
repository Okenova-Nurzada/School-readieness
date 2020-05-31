import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import StationeryKit from "../../components/StationeryBuilder/StationeryKit/StationeryKit";
import StationeryControls from "../../components/StationeryBuilder/StationeryControls/StationeryControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/StationeryBuilder/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import classes from "./StationeryBuilder.module.css";
import { useSelector } from "react-redux";
const PRICES = {
  notebook: 10,
  pen: 5,
  pencil: 10,
  eraser: 20,
  ruler: 20,
  scissors: 25,
};
export default withErrorHandler(() => {
  const { items } = useSelector((state) => state);

  const [price, setPrice] = useState(10);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

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
    const queryParams = Object.keys(items).map(
      (item) => encodeURIComponent(item) + "=" + encodeURIComponent(items[item])
    );
    queryParams.push("price=" + encodeURIComponent(price.toFixed(2)));
    history.push({
      pathname: "/checkout",
      search: queryParams.join("&"),
    });
  }

  function addItems(type) {
    const newItems = { ...items };
    newItems[type]++;
    //setItems(newItems);
    checkCanOrder(newItems);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeItems(type) {
    if (items[type] >= 1) {
      const newItems = { ...items };
      newItems[type]--;
      //setItems(newItems);
      checkCanOrder(newItems);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }
  /*
  useEffect(() => {
    axios
      .get("/items.json")
      .then((response) => setItems(response.data))
      .catch((error) => {});
  }, []);
*/
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
  if (isOrdering) {
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
