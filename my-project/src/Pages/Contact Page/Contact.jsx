import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);
    console.log("Message sent:", formData);
    
  };

  return (
    <div
      className=" bg-gradient-to-r from-pink-100 via-red-200 to-pink-100 min-h-screen bg-cover bg-center flex items-center justify-center px-4"
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Contact Us</h2>

        {submitted ? (
          <p className="text-green-600 text-center font-medium">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-500 text-white font-medium py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
