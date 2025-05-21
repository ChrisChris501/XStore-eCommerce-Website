import React, { useState, useEffect } from "react";
import { 
  FaTshirt, 
  FaCrown, 
  FaShippingFast, 
  FaStar, 
  FaInstagram,
  FaCreditCard,
  FaUndo,
  FaPhoneAlt,
  FaHeart
} from "react-icons/fa";

import Dress_1 from '../../assets/Dress_1.jpg'
import Dress_22 from '../../assets/Dress_22.jpeg'
import Dress_17 from '../../assets/Dress_17.jpeg'
import Dress_5 from '../../assets/Dress_5.jpeg'
import Dress_23 from '../../assets/Dress_23.jpeg'
import Dress_7 from '../../assets/Dress_7.jpg';
import Dress_8 from '../../assets/Dress_8.jpeg';
import Dress_9 from '../../assets/Dress_9.jpg';
import Dress_10 from '../../assets/Dress_10.jpeg';
import Dress_11 from '../../assets/Dress_11.jpeg';
import Dress_12 from '../../assets/Dress_12.jpg';

const LandingPage = () => {
  // State for email subscription
  const [email, setEmail] = useState("");
  
  // State for countdown timer
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Emma S.",
      review: "I absolutely love my new dress from XStore! The quality is exceptional and the fit is perfect. Will definitely shop here again.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jessica T.",
      review: "Fast shipping and beautiful clothes. Every piece I've ordered has been stunning and exactly as pictured.",
      rating: 5,
    },
    {
      id: 3,
      name: "Olivia M.",
      review: "The customer service is as amazing as their fashion collection. They helped me find the perfect outfit for my special occasion!",
      rating: 5,
    },
  ];

  // Product data
  const trendingProducts = [
    {
      id: 1,
      name: "Elegant Evening Dress",
      price: 69.99,
      image: Dress_5,
      rating: 5
    },
    {
      id: 2,
      name: "Summer Outfit",
      price: 79.99,
      image: Dress_23,
      rating: 5
    },
    {
      id: 3,
      name: "Casual Elegance",
      price: 89.99,
      image: Dress_17,
      rating: 5
    },
    {
      id: 4,
      name: "Formal Collection",
      price: 99.99,
      image: Dress_22,
      rating: 5
    }
  ];

  const dresses = [
    Dress_7,
    Dress_8,
    Dress_9,
    Dress_10,
    Dress_11,
    Dress_12,
  ];
  
  // Handle email subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Implementation would go here
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevState => {
        if (prevState.seconds > 0) {
          return { ...prevState, seconds: prevState.seconds - 1 };
        } else if (prevState.minutes > 0) {
          return { ...prevState, minutes: prevState.minutes - 1, seconds: 59 };
        } else if (prevState.hours > 0) {
          return { ...prevState, hours: prevState.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevState.days > 0) {
          return { ...prevState, days: prevState.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevState;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 via-red-200 to-pink-100">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-12 md:py-24">
          {/* Text content */}
          <div className="w-full md:w-1/2 ml-10 justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Elevate Your Style with XStore Fashion
            </h1>
            <p className="text-gray-700 mb-6 text-lg">
              Discover the latest trends in women's fashion — from stunning dresses to elegant gowns. Shine with every step.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-pink-600 text-white text-lg rounded-md hover:bg-pink-700 transition"
            >
              Shop Now
            </a>
          </div>

          {/* Hero image */}
          <div className="flex justify-center mb-10 md:mb-0">
          <div className="w-full md:w-1/2">
          <img
              src={Dress_1}
              alt="Fashionable Woman"
              className="rounded-lg shadow-lg h-auto lg:h-[450px] lg:w-[600px] object-cover object-center"
              style={{ imageRendering: 'crisp-edges' }}
            />
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b">
        <div className="bg-gray-50 rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Flash Sale</h2>
              <p className="text-gray-600 text-lg">Limited time offers on select items!</p>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className="border-2 border-pink-500 text-pink-700 text-xl font-bold w-12 h-12 flex items-center justify-center rounded-lg">
                  {countdown.days}
                </div>
                <span className="mt-2 text-sm text-gray-600">Days</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="border-2 border-pink-500 text-pink-700 text-xl font-bold w-12 h-12 flex items-center justify-center rounded-lg">
                  {countdown.hours}
                </div>
                <span className="mt-2 text-sm text-gray-600">Hours</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="border-2 border-pink-500 text-pink-700 text-xl font-bold w-12 h-12 flex items-center justify-center rounded-lg">
                  {countdown.minutes}
                </div>
                <span className="mt-2 text-sm text-gray-600">Minutes</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="border-2 border-pink-500 text-pink-700 text-xl font-bold w-12 h-12 flex items-center justify-center rounded-lg">
                  {countdown.seconds}
                </div>
                <span className="mt-2 text-sm text-gray-600">Seconds</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-pink-700 text-white font-semibold rounded-md hover:bg-pink-700 transition animate-pulse"
            >
            Shop the Sale
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Explore Our Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* New Arrivals */}
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col h-full">
            <img
              className="rounded-lg shadow-lg h-auto lg:h-80 w-full object-cover object-center"
              src={Dress_17}
              alt="New Arrivals"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">New Arrivals</h3>
            <p className="text-gray-600 mb-4">Discover the latest trends and styles.</p>
            <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition mt-auto">
              Shop Now
            </button>
          </div>

          {/* Best Sellers */}
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col h-full">
            <img
              className="rounded-lg shadow-lg h-auto lg:h-80 w-full object-cover object-center"
              src={Dress_5}
              alt="Best Sellers"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Best Sellers</h3>
            <p className="text-gray-600 mb-4">Shop our most popular and in-demand items.</p>
            <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition mt-auto">
              Shop Now
            </button>
          </div>

          {/* Seasonal Collections */}
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col h-full">
            <img
             className="rounded-lg shadow-lg h-auto lg:h-80 w-full object-cover object-center"
              src={Dress_23}
              alt="Seasonal Collection"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Seasonal Collections</h3>
            <p className="text-gray-600 mb-4">Explore our specially curated seasonal selections.</p>
            <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition mt-auto">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t">
        <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          Trending Now
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Our most popular items that shoppers are loving this season
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-pink-600 py-2 rounded hover:bg-gray-100 transition font-medium">
                    Quick View
                  </button>
                </div>
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaHeart className="text-pink-500 w-4 h-4" />
                </button>
              </div>
              <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-pink-600 font-semibold">${product.price}</span>
                <div className="flex text-yellow-400">
                  {[...Array(product.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 border-2 border-pink-600 text-pink-600 font-semibold rounded-md hover:bg-pink-600 hover:text-white transition"
          >
            View All Trending Items
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Read genuine reviews from our valued customers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg border-b-2 border-pink-400">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-pink-100 via-red-200 to-pink-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose XStore?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trendy Designs */}
            <div className="p-6 flex flex-col items-center text-center">
              <FaCrown className="text-4xl text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trendy Designs</h3>
              <p className="text-gray-600">
                Stay ahead of fashion trends with our latest collections, curated by expert stylists.
              </p>
            </div>

            {/* Quality Fabrics */}
            <div className="p-6 flex flex-col items-center text-center">
              <FaTshirt className="text-4xl text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Fabrics</h3>
              <p className="text-gray-600">
                Only the finest materials to keep you comfortable and stylish all day long.
              </p>
            </div>

            {/* Fast & Easy Delivery */}
            <div className="p-6 flex flex-col items-center text-center">
              <FaShippingFast className="text-4xl text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast & Easy Delivery</h3>
              <p className="text-gray-600">
                Swift nationwide delivery so you get your fashion fix fast, with real-time tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Service Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <FaCreditCard className="text-3xl text-pink-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm">Multiple secure payment options</p>
          </div>
          
          <div className="p-4">
            <FaUndo className="text-3xl text-pink-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Easy Returns</h3>
            <p className="text-gray-600 text-sm">30-day hassle-free return policy</p>
          </div>
          
          <div className="p-4">
            <FaPhoneAlt className="text-3xl text-pink-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600 text-sm">24/7 dedicated customer service</p>
          </div>
          
          <div className="p-4">
            <FaTshirt className="text-3xl text-pink-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Size Guarantee</h3>
            <p className="text-gray-600 text-sm">Free exchanges if size isn't right</p>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t">
        <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center border-t-2 pt-4 border-pink-300">
          #XStoreStyle
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Follow us on Instagram and tag your photos with #XStoreStyle for a chance to be featured
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {dresses.map((dress, index) => (
          <div key={index} className="aspect-square overflow-hidden relative group">
            <img
              src={dress}
              alt={`Instagram Post ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-pink-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <FaInstagram className="text-white text-3xl" />
            </div>
          </div>
        ))}
      </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition"
          >
            Follow us on Instagram
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
              <p className="mb-0 text-pink-100">
                Get exclusive offers, fashion tips, and be the first to know about new arrivals.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 rounded text-gray-800 focus:outline-none"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 transition whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;