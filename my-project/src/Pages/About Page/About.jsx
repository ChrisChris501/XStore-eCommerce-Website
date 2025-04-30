import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div
        className="h-72 bg-cover bg-center flex items-center justify-center"
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md text-center">
          <h1 className="text-4xl font-bold text-white">About XStore</h1>
          <p className="text-pink-100 mt-2">Where fashion meets elegance.</p>
        </div>
      </div>

      {/* About Text Section */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-pink-600 mb-6">Our Story</h2>
        <p className="leading-relaxed mb-4">
          XStore is dedicated to empowering women through fashion. We believe that every woman deserves to feel beautiful, confident, and stylish — every single day. That's why we curate collections that blend comfort with trend, offering an array of dresses that cater to every mood, occasion, and personality.
        </p>
        <p className="leading-relaxed mb-4">
          From everyday wear to standout pieces, our mission is to deliver quality, fashion-forward designs right to your doorstep. We stay ahead of the trends so you don't have to, and we’re proud to be part of your fashion journey.
        </p>
        <p className="leading-relaxed">
          Join our community of strong, stylish women and discover fashion that speaks to you. At XStore, it’s more than clothing — it’s a movement.
        </p>
      </div>
    </div>
  );
};

export default About;
