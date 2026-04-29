import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { api } from "../api/axiosInstance";

export default function SignupPage() {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const selectedRoleId = watch("role_id");
  const password = watch("password");

  const selectedRole = roles.find(
    (role) => String(role.id) === String(selectedRoleId)
  );

  const isStore = selectedRole?.code === "store" || selectedRole?.name === "Store";

  useEffect(() => {
    api.get("/roles").then((res) => {
      setRoles(res.data);

      const customerRole = res.data.find(
        (role) =>
          role.code === "customer" ||
          role.name?.toLowerCase() === "customer"
      );

      if (customerRole) {
        setValue("role_id", customerRole.id);
      }
    });
  }, [setValue]);

   const onSubmit = async (data) => {
    try {
      await api.post("/signup", payload);

      alert("You need to click link in email to activate your account!");
      history.goBack();
    } catch (err) {
      setServerError(
        err.response?.data?.message ||
          err.response?.data ||
          "Signup failed. Please check your information."
      );
    }
  };


  return (
    <main className=" flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        {serverError && (
          <p className="bg-red-100 text-red-700 p-3 rounded">{serverError}</p>
        )}

        <div>
          <input
            className="w-full border p-3 rounded"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <input
            className="w-full border p-3 rounded"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="password"
            className="w-full border p-3 rounded"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
                message:
                  "Password must be min 8 chars with uppercase, lowercase, number and special char",
              },
            })}
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <div>
          <input
            type="password"
            className="w-full border p-3 rounded"
            placeholder="Confirm Password"
            {...register("passwordConfirm", {
              required: "Password confirmation is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <p className="text-red-500 text-sm">
            {errors.passwordConfirm?.message}
          </p>
        </div>

        <div>
          <select
            className="w-full border p-3 rounded"
            {...register("role_id", {
              required: "Role is required",
            })}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          <p className="text-red-500 text-sm">{errors.role_id?.message}</p>
        </div>

        {isStore && (
          <>
            <div>
              <input
                className="w-full border p-3 rounded"
                placeholder="Store Name"
                {...register("store.name", {
                  required: "Store name is required",
                  minLength: {
                    value: 3,
                    message: "Store name must be at least 3 characters",
                  },
                })}
              />
              <p className="text-red-500 text-sm">
                {errors.store?.name?.message}
              </p>
            </div>

            <div>
              <input
                className="w-full border p-3 rounded"
                placeholder="Store Phone"
                {...register("store.phone", {
                  required: "Store phone is required",
                  pattern: {
                    value: /^(\+90|0)?5\d{9}$/,
                    message: "Please enter a valid Türkiye phone number",
                  },
                })}
              />
              <p className="text-red-500 text-sm">
                {errors.store?.phone?.message}
              </p>
            </div>

            <div>
              <input
                className="w-full border p-3 rounded"
                placeholder="Store Tax ID"
                {...register("store.tax_no", {
                  required: "Tax ID is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Tax ID format must be TXXXXVXXXXXX",
                  },
                })}
              />
              <p className="text-red-500 text-sm">
                {errors.store?.tax_no?.message}
              </p>
            </div>

            <div>
              <input
                className="w-full border p-3 rounded"
                placeholder="Store IBAN"
                {...register("store.bank_account", {
                  required: "IBAN is required",
                  pattern: {
                    value: /^TR\d{24}$/,
                    message: "Please enter a valid Türkiye IBAN",
                  },
                })}
              />
              <p className="text-red-500 text-sm">
                {errors.store?.bank_account?.message}
              </p>
            </div>
          </>
        )}

        <button
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-3 rounded font-bold disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </main>
  );
}