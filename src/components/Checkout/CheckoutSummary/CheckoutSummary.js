 import React from "react";
 import { Route } from "react-router-dom";
 import StationeryKit from "../../StationeryBuilder/StationeryKit/StationeryKit";
 import Button from "../../UI/Button/Button";
 import classes from "./CheckoutSummary.module.css";

 export default ({ price, items, checkoutCancel, checkoutContinue }) => {
  return (
     <div className={classes.CheckoutSummary}>
      <StationeryKit price={price} items={items} />
       <Route path="/checkout" exact>
        <Button click={checkoutCancel} red>
          Cancel
       </Button>
        <Button click={checkoutContinue} green>
          Continue
         </Button>
     </Route>
    </div>
   );
 };


