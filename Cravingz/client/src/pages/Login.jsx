import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import ForgetPasswordModals from "../components/publicModals/ForgetPasswordModals";
import Loading from "../components/Loading";

const Login = () => {
  const { setUser, setIsLogin, setRole } = useAuth();

  const navigate = useNavigate();

  const [isForgetPasswordModelOpen, setIsForgetPasswordModelOpen] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(formData);
    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      setUser(res.data.data);
      setIsLogin(true);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      handleClearForm();
      switch (res.data.data.role) {
        case "manager": {
          setRole("manager");
          navigate("/resturant-dashboard");
          break;
        }
        case "partner": {
          setRole("partner");
          navigate("/rider-dashboard");
          break;
        }
        case "customer": {
          setRole("customer");
          navigate("/user-dashboard");
          break;
        }
        case "admin": {
          setRole("admin");
          navigate("/admin-dashboard");
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-100 h-100 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

 return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-text)] mb-1">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500">
            Login to continue 🍕
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          onReset={handleClearForm}
          className="space-y-5"
        >

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="
                w-full px-4 py-3 rounded-lg
                border border-gray-300
                focus:border-[var(--color-primary)]
                focus:ring-1 focus:ring-[var(--color-primary)]
                outline-none
                transition
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="
                w-full px-4 py-3 rounded-lg
                border border-gray-300
                focus:border-[var(--color-primary)]
                focus:ring-1 focus:ring-[var(--color-primary)]
                outline-none
                transition
              "
            />
          </div>

          {/* Forgot */}
          <div className="flex justify-end">
            <button
              className="text-sm text-[var(--color-secondary)] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                setIsForgetPasswordModelOpen(true);
              }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">

            {/* Clear */}
            <button
              type="reset"
              disabled={isLoading}
              className="
                flex-1 py-3 rounded-lg
                border border-gray-300
                text-gray-700
                hover:bg-gray-100
                transition
                disabled:opacity-60
              "
            >
              Clear
            </button>

            {/* Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                flex-1 py-3 rounded-lg
                bg-[var(--color-primary)]
                text-white
                font-semibold
                hover:bg-[var(--color-primary-hover)]
                transition
                shadow
                disabled:opacity-60
              "
            >
              {isLoading ? "Loading..." : "Login"}
            </button>

          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          We respect your privacy
        </p>

      </div>
    </div>

    {isForgetPasswordModelOpen && (
      <ForgetPasswordModals
        onClose={() => setIsForgetPasswordModelOpen(false)}
      />
    )}
  </>
);


};

export default Login;
