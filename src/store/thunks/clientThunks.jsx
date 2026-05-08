import { setRoles } from "../actions/clientActions";
import { api } from "../../api/axiosInstance";

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const roles = state?.client?.roles || [];

    if (roles.length > 0) return;

    try {
      const res = await api.get("/roles");
      dispatch(setRoles(res.data));
    } catch (err) {
      console.error("Failed to fetch roles", err);
    }
  };
};