import React, { useState } from "react";
import "../output.css";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const authCtx = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form data:", formData);
    // Add login logic here
    setLoading(true);
    try {
      const currentUser = await authCtx.login(
        formData.email,
        formData.password
      );
      authCtx.setCurrentUser(currentUser);
      console.log(currentUser);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  async function loginWithGoogle() {
    try {
      const currentUser = await authCtx.loginWithGoogle();
      authCtx.setCurrentUser(currentUser);
      console.log(currentUser);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="main max-w-screen-md mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="font-bold mb-4 text-center sign-text">Log In</h1>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mb-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="w-100 text-center mt-2 txt-black">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>

      <button
        onClick={loginWithGoogle}
        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        LogIn with Google
      </button>
    </div>
  );
};

export default Login;
