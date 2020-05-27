import * as actions from "./actions";

const initialState = {
  items: null,
  price: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return state;

    case actions.REMOVE_ITEM:
      return state;

    default:
      return state;
  }
};
