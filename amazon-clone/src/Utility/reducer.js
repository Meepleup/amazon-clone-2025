// src/Utility/reducer.js
export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      if (index >= 0) {
        const newBasket = [...state.basket];
        newBasket[index].amount += 1;
        return { ...state, basket: newBasket };
      }

      return {
        ...state,
        basket: [...state.basket, { ...action.item, amount: 1 }],
      };
    }

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((_, i) => i !== action.index),
      };

    case "EMPTY_BASKET":
      return { ...state, basket: [] };

    case "SET_USER":
      return { ...state, user: action.user };

    default:
      return state;
  }
};
