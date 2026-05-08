import { api, updateApiWithToken } from "../../api/axiosInstance";
import { setUser } from "./clientActions";
import { toast } from "react-toastify";

export const loginUser = (data, remember) => async (dispatch) => {
  try {
    const res = await api.post("/login", data);

    const response = res.data;
    // Handle different response structures
    let user, token;
    if (response.user) {
      user = response.user;
      token = response.token;
    } else if (response.data?.user) {
      user = response.data.user;
      token = response.token || response.access_token;
    } else {
      // Direct response with user data
      user = {
        name: response.name,
        email: response.email,
        role_id: response.role_id,
      };
      token = response.token;
    }

    if (!user) throw new Error("User not found in response");

    dispatch(setUser(user));

    // Set token in axios header
    updateApiWithToken(token);

    // Store token in localStorage only if remember is checked
    if (remember) {
      localStorage.setItem("token", token);
    }

    return user; // Return user for success handling
  } catch (err) {
    const errorMessage = err.response?.data?.message || err.message || "Login failed";
    toast.error(errorMessage);
    throw err; // Re-throw for component handling
  }
};

export const logoutUser = () => (dispatch) => {
  updateApiWithToken(null);
  dispatch(setUser(null));
};