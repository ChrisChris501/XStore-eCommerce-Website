import React, { useState } from "react";
import Dress_22 from "../../assets/Dress_22.jpeg";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validation for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters long and include both letters and numbers.");
      return;
    }

    // If everything is valid
    setError("");
    console.log("User logged in", formData);
  };

  return (
    <div className="flex min-h-screen shadow-lg">
      {/* Left Section: Image */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${Dress_22})` }}></div>

      {/* Right Section: Form */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-pink-100 via-red-200 to-pink-100 to py-8 px-6">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-3xl font-semibold text-center text-pink-600">Log In to Your Account</h2>

          {error && <div className="text-red-600 text-center">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-pink-600 text-white font-medium text-sm rounded-md hover:bg-pink-500"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-pink-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
