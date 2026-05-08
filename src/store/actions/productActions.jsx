import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  SET_CATEGORY,
  SET_SORT,
  SET_PRODUCT,
  SET_PRODUCT_FETCH_STATE,
} from "../reducers/productReducer";
import { api } from "../../api/axiosInstance";

export const setCategories = (data) => ({ type: SET_CATEGORIES, payload: data });
export const setProductList = (data) => ({ type: SET_PRODUCT_LIST, payload: data });
export const setTotal = (data) => ({ type: SET_TOTAL, payload: data });
export const setFetchState = (data) => ({ type: SET_FETCH_STATE, payload: data });
export const setLimit = (num) => ({ type: SET_LIMIT, payload: num });
export const setOffset = (num) => ({ type: SET_OFFSET, payload: num });
export const setFilter = (value) => ({ type: SET_FILTER, payload: value });
export const setCategory = (value) => ({ type: SET_CATEGORY, payload: value });
export const setSort = (value) => ({ type: SET_SORT, payload: value });
export const setProduct = (data) => ({ type: SET_PRODUCT, payload: data });
export const setProductFetchState = (data) => ({ type: SET_PRODUCT_FETCH_STATE, payload: data });

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    dispatch(setFetchState("FETCHING"));

    const { product } = getState();
    const { category, sort, filter, limit, offset } = product;

    // Build query parameters
    const params = new URLSearchParams();
    if (category) params.append("category", category);
    if (sort) params.append("sort", sort);
    if (filter) params.append("filter", filter);
    if (limit !== undefined && limit !== null) params.append("limit", limit);
    if (offset !== undefined && offset !== null) params.append("offset", offset);

    const queryString = params.toString();
    const url = `/products${queryString ? `?${queryString}` : ""}`;

    const response = await api.get(url);
    const { products: productList, total } = response.data;

    dispatch(setProductList(productList));
    dispatch(setTotal(total || productList.length));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch(setFetchState("FAILED"));
  }
};

export const fetchProduct = (productId) => async (dispatch) => {
  try {
    dispatch(setProductFetchState("FETCHING"));
    const response = await api.get(`/products/${productId}`);
    dispatch(setProduct(response.data));
    dispatch(setProductFetchState("FETCHED"));
  } catch (error) {
    console.error("Error fetching product:", error);
    dispatch(setProductFetchState("FAILED"));
  }
};