import React from "react";
import classes from "./StationeryControl.module.css";
import { useDispatch } from "react-redux";
import { remove, add } from "../../../../store/actions/builder";

export default ({  label, item, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.StationeryControl}>
      <button
        className={classes.less}
        onClick={() => remove(dispatch, item)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{label}</span>
      <button
        className={classes.more}
        onClick={() => add(dispatch, item)}
      >
        +
      </button>
    </div>
  );
};
