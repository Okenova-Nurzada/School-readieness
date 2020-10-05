import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../axios";
import { load } from "../../store/actions/builder";
import StationeryKit from "../../components/StationeryBuilder/StationeryKit/StationeryKit";
import StationeryControls from "../../components/StationeryBuilder/StationeryControls/StationeryControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/StationeryBuilder/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import classes from "./StationeryBuilder.module.css";

export default withErrorHandler(() => {
  const { items, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (items) {
    const canOrder = Object.values(items).reduce((canOrder, item) => {
      return !canOrder ? item.quantity > 0 : canOrder;
    }, false);

    output = (
      <>
        <StationeryKit price={price} items={items} />
        <StationeryControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          items={items}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            items={items}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
          />
        </Modal>
      </>
    );
  }

  return <div className={classes.StationeryBuilder}>{output}</div>;
}, axios);
