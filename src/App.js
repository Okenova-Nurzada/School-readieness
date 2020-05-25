import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";

import StationeryBuilder from "./containers/StationeryBuilder/StationeryBuilder";
import Checkout from "./containers/Checkout/Checkout";
import "./App.css";

export default () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <StationeryBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
