import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dress_22 from "../../assets/Dress_22.jpeg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form input
  const validateForm = () => {
    const { username, email, password } = formData;

    // Basic email format check
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!username || !email || !password) {
      return "All fields are required.";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email.";
    }
    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      return "Password must be at least 8 characters long and contain both a letter and a number.";
    }
    return null; // No errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      console.log("Form Submitted: ", formData);
      navigate("/"); // Redirect to homepage or login page after successful sign-up
    }
  };

  return (
    <div className="flex min-h-screen shadow-lg">
      {/* Left Section: Image */}
      <div
        className="w-1/2 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Dress_22})`,
          backgroundSize: 'contain',
          imageRendering: 'pixelated',
        }}
></div>

      {/* Right Section: Form */}
      <div className="w-1/2 flex bg-gradient-to-r from-pink-100 via-red-200 to-pink-100 items-center justify-center  py-8 px-6">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-3xl font-semibold text-center text-pink-600">Create an Account</h2>

          {error && <div className="text-red-600 text-center">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

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
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/Signin" className="text-pink-600 hover:underline">
              Sign In here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
