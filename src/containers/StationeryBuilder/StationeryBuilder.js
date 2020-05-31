import React, { useState } from "react";
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

export default withErrorHandler(() => {
  const { items, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(items).reduce((canOrder, number) => {
    return !canOrder ? number > 0 : canOrder;
  }, false);

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
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          items={items}
        />
      </>
    );
  }

  let orderSummary = <Spinner />;
  if (isOrdering) {
    orderSummary = (
      <OrderSummary
        items={items}
        finishOrder={() => history.push("/checkout")}
        canOrder={() => setIsOrdering(false)}
        price={price}
      />
    );
  }

  return (
    <div className={classes.StationeryBuilder}>
      {output}
      <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
