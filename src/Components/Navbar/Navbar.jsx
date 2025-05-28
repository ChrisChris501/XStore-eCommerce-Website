import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-2xl bg-gradient-to-r from-pink-500 via-red-400 to-pink-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-pink-100">XStore</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
            to="/"
            className="text-pink-100 hover:text-pink-300 text-sm font-medium"
          >
            Home
          </Link>
            <Link to ='/ProductList' className="text-pink-100  hover:text-pink-300 text-sm font-medium">
              Products
            </Link>
            <Link to="/About" className="text-pink-100  hover:text-pink-300 text-sm font-medium">
              About
            </Link>
            <Link to="/Contact" className="text-pink-100  hover:text-pink-300 text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop Auth Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
          <Link to="/Cart" className="text-pink-100 hover:text-pink-300 text-sm font-medium">
          <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
          </Link>

            <Link
              to="/SignIn"
              className="text-pink-100  hover:text-pink-300 text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/SignUp"
              className="px-4 py-2 text-pink-100 border border-pink-500 rounded-md text-sm font-medium hover:text-pink-300 hover:border-pink-300"
            >
              Sign Up
            </Link>


          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-pink-100 hover:text-pink-300 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  // Close Icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger Icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className="md:hidden space-y-2">
             <Link
              to="/"
              className="text-pink-100 hover:text-pink-300 text-sm font-medium"
            >
              Home
            </Link>
            <a href="#" className="block text-pink-100 hover:text-pink-300 text-sm font-medium">
              Products
            </a>
            <a href="#" className="block text-pink-100 hover:text-pink-300 text-sm font-medium">
              About
            </a>
            <a href="#" className="block text-pink-100 hover:text-pink-300 text-sm font-medium pb-2">
              Contact
            </a>
            {/* Divider */}
            <div className="block border-t border-pink-200 pt-4"></div>
            <Link to="/cart" className="block text-pink-100 hover:text-pink-300 text-sm font-medium">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            </Link>

            <Link
              to="/SignIn"
              className="block text-pink-100  hover:text-pink-300 text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/SignUp"
              className="block text-pink-100 rounded-md text-sm font-medium hover:text-pink-300 hover:border-pink-300 pb-2"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
