import * as types from "../actions/types";

const initialState = {
  items: null,
  price: 100,
};



export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.item]: {
            ...state.items[action.item],
            quantity: state.items[action.item].quantity + 1,
          },
        },
        price: state.price + state.items[action.item].price,
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.item]: {
            ...state.items[action.item],
            quantity: state.items[action.item].quantity - 1,
          },
        },
      };
      case types.SET_ITEMS:
        return {
          ...state,
          items: action.items,
        };
  

    default:
      return state;
  }
};
