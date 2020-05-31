import * as actions from "./actions";

const initialState = {
  items: {
    pen: 1,
    notebook: 1,
    pencil: 1,
    ruler: 1,
    scissors: 1,
    eraser: 1,
  },
  price: 100,
};

const PRICES = {
  notebook: 10,
  pen: 5,
  pencil: 10,
  eraser: 20,
  ruler: 20,
  scissors: 25,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.item]: state.items[action.item] + 1,
        },
        price: state.price + PRICES[action.item],
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.item]: state.items[action.item] - 1,
        },
      };
    default:
      return state;
  }
};
