import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setData({ email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleClear();
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="border p-6 w-[400px] text-center">
        <h1 className="text-3xl font-bold text-pink-700 mb-6">
          LOGIN FORM
        </h1>

        <form onSubmit={handleSubmit} onReset={handleClear}>
          <div className="mb-4 text-left">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border px-3 py-2"
            />
          </div>

          <div className="mb-4 text-left">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border px-3 py-2"
            />
          </div>

          <div className="flex justify-center gap-4">
            <button type="reset" className="bg-red-600 text-white px-4 py-2">
              Clear
            </button>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
