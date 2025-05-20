import React, { useContext } from 'react'
import { ShopContext } from '../../Components/ShopContext/ShopContext'

const ProductList = () => {
  const { products } = useContext(ShopContext)

  return (
    <div className="py-10 px-4 md:px-10 bg-orange-50 min-h-screen">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700">Our Elegant Collection</h2>
        <p className="text-gray-600 mt-2">Timeless pieces curated just for you</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          const { id, image, title, price } = product;

          return (
            <div
              key={id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-[70%] object-cover"
              />

              <div className="p-4">
                <h4 className="text-lg font-semibold text-orange-800">{title}</h4>
                <p className="text-gray-600 mt-1 mb-4">${price}</p>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-xl transition">
                  Add to Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
