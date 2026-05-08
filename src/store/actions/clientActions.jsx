import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE } from "../reducers/clientReducer";
import { api } from "../../api/axiosInstance";

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (lang) => ({ type: SET_LANGUAGE, payload: lang });

// Thunk action creator for getting roles
export const getRoles = () => async (dispatch, getState) => {
  // Check if roles are already fetched
  const { client } = getState();
  if (client.roles && client.roles.length > 0) {
    return; // Already have roles, no need to fetch
  }

  try {
    const response = await api.get("/roles");
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error("Failed to fetch roles:", error);
  }
};