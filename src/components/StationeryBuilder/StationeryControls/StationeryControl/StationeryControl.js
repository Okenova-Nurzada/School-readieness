import React from "react";
import classes from "./StationeryControl.module.css";
import { useDispatch } from "react-redux";
import { ADD_ITEMS, REMOVE_ITEMS } from "../../../../store/actions/types";

export default ({ control, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.StationeryControl}>
      <button
        className={classes.less}
        onClick={() => dispatch({ type: REMOVE_ITEM, item: control.type })}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() => dispatch({ type: ADD_ITEM, item: control.type })}
      >
        +
      </button>
    </div>
  );
};
