import { ADD_ITEMS, REMOVE_ITEMS } from "./types";

export const add = (dispatch, item) =>
  dispatch({
    type: ADD_ITEMS,
    item,
  });

export const remove = (dispatch, item) =>
  dispatch({
    type: REMOVE_ITEMS,
    item,
  });
