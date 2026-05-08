import { SET_CART, SET_PAYMENT, SET_ADDRESS } from "../reducers/shoppingCartReducer";

export const setCart = (cart) => ({ type: SET_CART, payload: cart });
export const setPayment = (pay) => ({ type: SET_PAYMENT, payload: pay });
export const setAddress = (addr) => ({ type: SET_ADDRESS, payload: addr });