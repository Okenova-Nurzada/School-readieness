import React from "react";
import classes from "./StationeryControl.module.css";
import { useDispatch } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "../../../../store/actions";

export default ({ control, removeItem, addItem, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.StationeryControl}>
      <button
        className={classes.less}
        onClick={() => dispatch({ type: REMOVE_ITEM })}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() => dispatch({ type: ADD_ITEM })}
      >
        +
      </button>
    </div>
  );
};
