import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyUser } from "../../api/axiosInstance";

const useAutoLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const performAutoLogin = async () => {
      try {
        const user = await verifyUser();
        if (user) {
          dispatch({ type: "SET_USER", payload: user });
        }
      } catch (error) {
        console.error("Auto login failed:", error);
        dispatch({ type: "SET_USER", payload: null });
      }
    };

    performAutoLogin();
  }, [dispatch]);
};

export default useAutoLogin;