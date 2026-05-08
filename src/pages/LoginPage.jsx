import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/authActions";
import { useHistory, useLocation } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await dispatch(loginUser(data, data.remember));
      const redirectTo = location.state?.from || "/";
      history.replace(redirectTo);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-white p-5 rounded-lg shadow-md space-y-3"
      >
        <h2 className="text-xl font-semibold text-center mb-2">Login</h2>

        {/* EMAIL */}
        <div className="space-y-1">
          <input
            autoFocus
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
            {...register("email", {
              required: "Email zorunlu",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Geçerli email gir",
              },
            })}
          />
          <p className="text-xs text-red-500">{errors.email?.message}</p>
        </div>

        {/* PASSWORD */}
        <div className="space-y-1 relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
            {...register("password", {
              required: "Password zorunlu",
            })}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-xs text-blue-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>

          <p className="text-xs text-red-500">{errors.password?.message}</p>
        </div>

        {/* REMEMBER */}
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("remember")} />
          Remember me
        </label>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-2 rounded text-sm font-medium transition flex justify-center items-center"
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}