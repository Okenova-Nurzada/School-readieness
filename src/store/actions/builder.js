import axios from "../../axios";
import { ADD_ITEM, REMOVE_ITEM, SET_ITEMS } from "./types";

export const add = (dispatch, item) =>
  dispatch({
    type: ADD_ITEM,
    item,
  });

export const remove = (dispatch, item) =>
  dispatch({
    type: REMOVE_ITEM,
    item,
  });

export const set = (dispatch, items) =>
  dispatch({
    type: SET_ITEMS,
    items,
  });

export const load = (dispatch) =>
  axios
    .get("/items.json")
    .then(({ data }) => set(dispatch, data))
    .catch(() => {});
