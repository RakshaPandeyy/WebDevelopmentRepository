import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      role: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email,
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }

    if (!formData.role) {
      Error.role = "Please choose any one";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    console.log(formData);

    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4">
        {/* Card */}
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--color-text)] mb-1">
              Create Account
            </h1>
            <p className="text-sm text-gray-500">
              Join us and satisfy your cravings 🍕
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            onReset={handleClearForm}
            className="space-y-5"
          >
            {/* Role */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                I am
              </label>

              <div className="flex flex-wrap gap-6 text-sm">
                {["manager", "partner", "customer"].map((role) => (
                  <label
                    key={role}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={handleChange}
                      className="accent-[var(--color-primary)]"
                    />
                    {role === "manager"
                      ? "Restaurant Manager"
                      : role === "partner"
                        ? "Delivery Partner"
                        : "Customer"}
                  </label>
                ))}
              </div>

              {validationError.role && (
                <p className="text-xs text-red-500 mt-1">
                  {validationError.role}
                </p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="
                w-full px-4 py-3 rounded-lg
                border border-gray-300
                focus:border-[var(--color-primary)]
                focus:ring-1 focus:ring-[var(--color-primary)]
                outline-none transition
              "
              />

              {validationError.fullName && (
                <p className="text-xs text-red-500 mt-1">
                  {validationError.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="
              w-full px-4 py-3 rounded-lg
              border border-gray-300
              focus:border-[var(--color-primary)]
              focus:ring-1 focus:ring-[var(--color-primary)]
              outline-none transition
            "
            />

            {/* Mobile */}
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              maxLength="10"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="
              w-full px-4 py-3 rounded-lg
              border border-gray-300
              focus:border-[var(--color-primary)]
              focus:ring-1 focus:ring-[var(--color-primary)]
              outline-none transition
            "
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="
              w-full px-4 py-3 rounded-lg
              border border-gray-300
              focus:border-[var(--color-primary)]
              focus:ring-1 focus:ring-[var(--color-primary)]
              outline-none transition
            "
            />

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="
              w-full px-4 py-3 rounded-lg
              border border-gray-300
              focus:border-[var(--color-primary)]
              focus:ring-1 focus:ring-[var(--color-primary)]
              outline-none transition
            "
            />

            {/* Buttons */}
            <div className="flex gap-4 pt-6">
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

              {/* Submit */}
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
                {isLoading ? "Submitting..." : "Register"}
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-6">
            All fields are mandatory. We respect your privacy ❤️
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
