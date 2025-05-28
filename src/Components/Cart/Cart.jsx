import React from 'react'
import { FaTrash } from "react-icons/fa";
import CartDetails from './CartDetails';

const Cart = () => {
  return (
    <div>
      <div>
        {/*Cart_Left */}
        <div>

          {/*Cart_Header*/}
          <div>
            <h1>Shopping Cart</h1>
            <h1>Items: (0)</h1>
            <FaTrash className ="" />
          </div>
          {/*Cart_Header*/}
          <div>
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          <div>
            <CartDetails />
          </div>
        </div>
        {/*Cart_Right */}
        <div>
          <h2>Cart Summary</h2>
          <div>
            <span>Items</span>
            <span>0</span>
          </div>
          <div>
            <span>Subtotal</span>
            <span>0</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div>
            <span>Promo Code</span>
            <input type="text" placeholder='Enter your code here'/>
            <button>Apply</button>
          </div>
          <div>
            <span>Total Cost</span>
            <span>0</span>
          </div>
          <button>Check Out</button>
        </div>

      </div>
    </div>
  )
}

export default Cart
