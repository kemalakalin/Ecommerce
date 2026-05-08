import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api/axiosInstance";
import { getRoles } from "../store/actions/clientActions";

export default function SignupPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      role_id: "",
    },
  });

  const selectedRoleId = watch("role_id");
  const password = watch("password");

  const selectedRole = roles.find(
    (role) => String(role.id) === String(selectedRoleId)
  );

  const isStore =
    selectedRole?.code === "store" ||
    selectedRole?.name?.toLowerCase() === "store";

  // =========================
  // ROLES FETCH (POSTMAN TEST BEFORE)
  // =========================
  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  // Set default role when roles are loaded
  useEffect(() => {
    if (roles.length > 0) {
      const customerRole = roles.find(
        (role) =>
          role.code === "customer" ||
          role.name?.toLowerCase() === "customer"
      );

      if (customerRole) {
        setValue("role_id", customerRole.id);
      }
    }
  }, [roles, setValue]);

  // =========================
  // SUBMIT
  // =========================
  const onSubmit = async (data) => {
    setServerError("");

    try {
      // ⚠️ CONTRACT SAFE PAYLOAD (NO EXTRA FIELDS)
      const payload =
        isStore
          ? {
              name: data.name,
              email: data.email,
              password: data.password,
              role_id: Number(data.role_id),
              store: {
                name: data.store.name,
                phone: data.store.phone,
                tax_no: data.store.tax_no,
                bank_account: data.store.bank_account,
              },
            }
          : {
              name: data.name,
              email: data.email,
              password: data.password,
              role_id: Number(data.role_id),
            };

      await api.post("/signup", payload);

      // SUCCESS MESSAGE (REQUIRED)
      alert(
        "You need to click link in email to activate your account!"
      );

      history.goBack();
    } catch (err) {
      // ERROR HANDLING (stay on page)
      setServerError(
        err.response?.data?.message ||
          "Signup failed. Please check your information."
      );
    }
  };

  return (
    <main className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        {/* SERVER ERROR */}
        {serverError && (
          <p className="bg-red-100 text-red-700 p-3 rounded">
            {serverError}
          </p>
        )}

        {/* NAME */}
        <input
          className="w-full border p-3 rounded"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Min 3 characters",
            },
          })}
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        {/* EMAIL */}
        <input
          className="w-full border p-3 rounded"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        {/* PASSWORD */}
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
                "Min 8 chars, uppercase, lowercase, number, special char",
            },
          })}
        />
        <p className="text-red-500 text-sm">
          {errors.password?.message}
        </p>

        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          className="w-full border p-3 rounded"
          placeholder="Confirm Password"
          {...register("passwordConfirm", {
            required: "Confirm password required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        <p className="text-red-500 text-sm">
          {errors.passwordConfirm?.message}
        </p>

        {/* ROLE */}
        <select
          className="w-full border p-3 rounded"
          {...register("role_id", {
            required: "Role required",
          })}
        >
          <option value="">Select Role</option>
          {roles.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>

        <p className="text-red-500 text-sm">
          {errors.role_id?.message}
        </p>

        {/* STORE FIELDS (ONLY STORE ROLE) */}
        {isStore && (
          <>
            <input
              className="w-full border p-3 rounded"
              placeholder="Store Name"
              {...register("store.name", {
                required: "Store name required",
                minLength: 3,
              })}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="Store Phone"
              {...register("store.phone", {
                required: true,
                pattern: /^(\+90|0)?5\d{9}$/,
              })}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="Tax ID"
              {...register("store.tax_no", {
                required: true,
                pattern: /^T\d{4}V\d{6}$/,
              })}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="IBAN"
              {...register("store.bank_account", {
                required: true,
                pattern: /^TR\d{24}$/,
              })}
            />
          </>
        )}

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-3 rounded font-bold disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </main>
  );
}