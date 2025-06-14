import React, {useContext} from 'react'
import { FaTrash } from "react-icons/fa";
import CartDetails from './CartDetails';
import { ShopContext } from '../../Components/ShopContext/ShopContext';


const Cart = () => {
  const {cart, clearCart, total, itemAmount} = useContext(ShopContext)
  return (
    <div>
      <div>
        {/*Cart_Left */}
        <div>

          {/*Cart_Header*/}
          <div>
            <h1>Shopping Cart</h1>
            <h1>Items: ({itemAmount})</h1>
            <FaTrash onClick = {clearCart} className ="" />
          </div>
          {/*Cart_Header*/}
          <div>
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          <div>       
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartDetails item={item} key={item.id}/>
              ))
            ) : (
              <p>Your cart  is empty</p>
            )
            }
          </div>
        </div>
        {/*Cart_Right */}
        <div>
          <h2>Cart Summary</h2>
          <div>
            <span>Items</span>
            <span>{itemAmount}</span>
          </div>
          <div>
            <span>Subtotal</span>
            <span>${isNaN(total) ? 0: total}</span>
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
