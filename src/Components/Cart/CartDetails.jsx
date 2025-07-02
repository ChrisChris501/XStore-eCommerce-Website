import React, { useContext } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import { ShopContext } from '../../Components/ShopContext/ShopContext';

const CartDetails = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);

  const { id, title, image, price, amount } = item;

  return (
    <div className="grid grid-cols-4 items-center text-sm text-gray-700 py-3 border-b">
      {/* Product Description */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 flex-shrink-0">
          <img src={image} alt={title} className="h-full w-full object-cover rounded" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <button
            onClick={() => removeFromCart(id)}
            className="flex items-center text-red-500 mt-1 text-xs hover:underline"
          >
            <FaTrash className="mr-1" /> Remove
          </button>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center justify-center gap-2">
        <button onClick={() => decreaseAmount(id)} className="p-1 bg-gray-200 rounded">
          <IoMdRemove />
        </button>
        <span className="min-w-[24px] text-center">{amount}</span>
        <button onClick={() => increaseAmount(id)} className="p-1 bg-gray-200 rounded">
          <IoMdAdd />
        </button>
      </div>

      {/* Price */}
      <div className="text-center">${price.toFixed(2)}</div>

      {/* Total */}
      <div className="text-right font-semibold">
        ${ (price * amount).toFixed(2) }
      </div>
    </div>
  );
};

export default CartDetails;
