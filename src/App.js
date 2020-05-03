import React from "react";
import Layout from "./containers/Layout/Layout";
import StationeryBuilder from "./containers/StationeryBuilder/StationeryBuilder";
import "./App.css";

export default () => {
  return (
    <div className="App">
      <Layout>
        <StationeryBuilder />
      </Layout>
    </div>
  );
};
