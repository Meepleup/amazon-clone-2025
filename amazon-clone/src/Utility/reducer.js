import { type } from "./actionType";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex(
        (item) => item.id === action.id
      );

      const newBasket = [...state.basket];
      if (index >= 0) newBasket.splice(index, 1);

      return {
        ...state,
        basket: newBasket,
      };
    }

    case type.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };

    case type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
