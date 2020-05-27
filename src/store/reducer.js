import * as actions from "./actions";

const initialState = {
  items: null,
  price: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      console.log("item added");
      return state;

    case actions.REMOVE_ITEM:
      console.log("item removed");
      return state;

    default:
      return state;
  }
};
