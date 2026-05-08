const initialState = {
  cart: [],
  payment: null,
  address: null,
};

export const SET_CART = "SET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT";
export const TOGGLE_CART_ITEM_CHECKED = "TOGGLE_CART_ITEM_CHECKED";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };

    case ADD_TO_CART: {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        const newCart = [...state.cart];
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          count: newCart[existingItemIndex].count + 1,
        };
        return { ...state, cart: newCart };
      }

      return {
        ...state,
        cart: [...state.cart, { count: 1, checked: true, product: action.payload }],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case UPDATE_CART_ITEM_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, count: action.payload.count }
            : item
        ),
      };

    case TOGGLE_CART_ITEM_CHECKED:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
}