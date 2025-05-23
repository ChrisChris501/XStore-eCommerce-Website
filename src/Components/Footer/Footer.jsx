import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-50 border-t border-pink-100 pt-12 pb-6 text-gray-700 text-sm">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 break-words">
        {/* About */}
        <div>
          <h1 className="text-2xl font-bold text-pink-700">XStore</h1>
          <p className="leading-relaxed mt-2">
            At XStore, we blend trend with comfort and make fashion available for women.
            Explore our stylish collections of dresses and enjoy seamless delivery across Nigeria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-pink-600">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500 transition duration-200">Home</a></li>
            <li><a href="#" className="hover:text-pink-500 transition duration-200">Shop</a></li>
            <li><a href="#" className="hover:text-pink-500 transition duration-200">Collections</a></li>
            <li><a href="#" className="hover:text-pink-500 transition duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-pink-600">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500 transition duration-200">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-500 transition duration-200">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-500 transition duration-200">Order Tracking</a></li>
            <li><a href="#" className="hover:text-pink-500 transition duration-200">Help Center</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-pink-600">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-grey-600 hover:text-pink-500 transition" aria-label="Facebook">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-pgrey-600 hover:text-pink-500 transition" aria-label="Twitter">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-grey-600 hover:text-pink-500 transition" aria-label="Instagram">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-pink-100 pt-6 text-center text-xs text-gray-500">
        <p>&copy; 2025 XStore. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-pink-500">Privacy Policy</a> | <a href="#" className="hover:text-pink-500">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
