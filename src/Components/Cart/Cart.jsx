import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import CartDetails from './CartDetails';
import { ShopContext } from '../../Components/ShopContext/ShopContext';

const Cart = () => {
  const { cart, clearCart, total, itemAmount } = useContext(ShopContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Cart_Left */}
        <div className="w-full lg:w-2/3">
          
          {/* Cart_Header */}
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
            <div className="flex items-center gap-4">
              <h2 className="text-lg text-gray-600">Items: ({itemAmount})</h2>
              <FaTrash 
                onClick={clearCart} 
                className="text-red-500 cursor-pointer hover:text-red-700 text-lg"
                title="Clear Cart"
              />
            </div>
          </div>

          {/* Cart Table Header */}
          <div className="grid grid-cols-4 text-gray-600 font-medium text-sm border-b py-2">
            <span>Product Description</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Price</span>
            <span className="text-right">Total</span>
          </div>

          {/* Cart Items */}
          <div className=" ">
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartDetails item={item} key={item.id} />
              ))
            ) : (
              <p className="text-gray-500 text-center py-6">Your cart is empty</p>
            )}
          </div>
        </div>

        {/* Cart_Right */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Cart Summary</h2>

          <div className="flex justify-between py-2 text-gray-700">
            <span>Items</span>
            <span>{itemAmount}</span>
          </div>

          <div className="flex justify-between py-2 text-gray-700">
            <span>Subtotal</span>
            <span>${isNaN(total) ? 0 : total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2 text-gray-700">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>

          <div className="py-4">
            <label className="text-sm text-gray-600 block mb-1">Promo Code</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Enter your code here" 
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Apply</button>
            </div>
          </div>

          <div className="flex justify-between py-4 text-lg font-semibold text-gray-800 border-t mt-4">
            <span>Total Cost</span>
            <span>${isNaN(total) ? 0 : total.toFixed(2)}</span>
          </div>

          <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-semibold transition duration-200">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
