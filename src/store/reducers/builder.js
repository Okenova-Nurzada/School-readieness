import * as types from "../actions/types";

const initialState = {
  items: {
    pencil: { quantity: 1, price: 10, label: "Pencil" },
    notebook: { quantity: 1, price: 20, label: "Notebook" },
    pen: { quantity: 1, price: 8, label: "Pen" },
    eraser: { quantity: 1, price: 15, label: "Eraser" },
    ruler: { quantity: 1, price: 15, label: "Ruler" },
   scissors: { quantity: 1, price: 30, label: "Scissors" },
  },
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
    default:
      return state;
  }
};
