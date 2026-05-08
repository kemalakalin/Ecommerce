import { 
  SET_CART, 
  ADD_TO_CART, 
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_COUNT,
  TOGGLE_CART_ITEM_CHECKED,
  SET_PAYMENT, 
  SET_ADDRESS 
} from "../reducers/shoppingCartReducer";

export const setCart = (cart) => ({ type: SET_CART, payload: cart });
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (productId) => ({ type: REMOVE_FROM_CART, payload: productId });
export const updateCartItemCount = (id, count) => ({ type: UPDATE_CART_ITEM_COUNT, payload: { id, count } });
export const toggleCartItemChecked = (productId) => ({ type: TOGGLE_CART_ITEM_CHECKED, payload: productId });
export const setPayment = (pay) => ({ type: SET_PAYMENT, payload: pay });
export const setAddress = (addr) => ({ type: SET_ADDRESS, payload: addr });