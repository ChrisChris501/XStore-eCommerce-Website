    import React from "react";
    import { FaTshirt, FaCrown, FaShippingFast } from "react-icons/fa";

    import Dress_1 from '../../assets/Dress_1.jpg'
    import Dress_17 from '../../assets/Dress_17.jpeg'
    import Dress_5 from '../../assets/Dress_5.jpeg'
    import Dress_23 from '../../assets/Dress_23.jpeg'

    const LandingPage = () => {
    return (
        <div className="bg-white">
        {/* Hero Section */}
        <section className=" bg-gradient-to-r from-pink-100 via-red-200 to-pink-100">
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
                className="inline-block px-6 py-3 bg-pink-600 text-white text-lg rounded-md hover:bg-pink-600 transition"
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

        {/* Featured Products Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
    Explore Our Collections
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* New Arrivals */}
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col h-full">
      <img
        className="rounded-lg shadow-lg h-auto lg:h-80 lg:w-80 object-cover object-center"
        style={{ imageRendering: 'crisp-edges' }}
        src={Dress_17} // Updated new arrivals image
        alt="New Arrivals"
      />
      <h3 className="text-lg font-semibold mb-2">New Arrivals</h3>
      <p className="text-gray-600 mb-4">Discover the latest trends and styles.</p>
      <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition mt-auto">
        Shop Now
      </button>
    </div>

    {/* Best Sellers */}
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col h-full">
      <img
        className="rounded-lg shadow-lg h-auto lg:h-80 lg:w-80 object-cover object-center"
        style={{ imageRendering: 'crisp-edges' }}
        src={Dress_5} 
        alt="Best Sellers"
      />
      <h3 className="text-lg font-semibold mb-2">Best Sellers</h3>
      <p className="text-gray-600 mb-4">Shop our most popular and in-demand items.</p>
      <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition mt-auto">
        Shop Now
      </button>
    </div>

    {/* Seasonal Collections */}
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col h-full">
      <img
       className="w-full h-auto rounded-lg shadow-lg lg:h-80 lg:w-80 object-cover"
       style={{ imageRendering: 'crisp-edges' }}

        src={Dress_23}
        alt="Seasonal Collection"
      />
      <h3 className="text-lg font-semibold mb-2">Seasonal Collections</h3>
      <p className="text-gray-600 mb-4">Explore our specially curated seasonal selections.</p>
      <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition mt-auto">
        Shop Now
      </button>
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
          Stay ahead of fashion trends with our latest collections.
        </p>
      </div>

      {/* Quality Fabrics */}
      <div className="p-6 flex flex-col items-center text-center">
        <FaTshirt className="text-4xl text-pink-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Quality Fabrics</h3>
        <p className="text-gray-600">
          Only the finest materials to keep you comfortable and stylish.
        </p>
      </div>

      {/* Fast & Easy Delivery */}
      <div className="p-6 flex flex-col items-center text-center">
        <FaShippingFast className="text-4xl text-pink-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Fast & Easy Delivery</h3>
        <p className="text-gray-600">
          Swift nationwide delivery so you get your fashion fix fast.
        </p>
      </div>
    </div>
  </div>
</section>
</div>
    );
    };

    export default LandingPage;
