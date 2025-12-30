// ================= INITIAL STATE =================
export const initialState = {
  basket: [],
  user: null,
};

// ================= HELPER =================
const getBasketTotal = (basket) =>
  basket.reduce((sum, item) => sum + item.price, 0);

// ================= REDUCER =================
export const reducer = (state, action) => {
  switch (action.type) {
    // ---------- BASKET ----------
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter(
          (item) => item.id !== action.id
        ),
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    // ---------- USER ----------
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    // ---------- DEFAULT ----------
    default:
      return state;
  }
};

// ================= SELECTORS (OPTIONAL BUT CLEAN) =================
export const selectBasket = (state) => state.basket;
export const selectUser = (state) => state.user;
export const selectBasketTotal = (state) =>
  getBasketTotal(state.basket);
