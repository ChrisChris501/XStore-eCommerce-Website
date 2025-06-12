import React, {useContext} from 'react'
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { ShopContext } from '../../Components/ShopContext/ShopContext';


const CartDetails = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(ShopContext)

  const {id, title, image, price, amount} = item

  return (
    <div>
      <div>
        <div>
          <img src={image} alt="" />
          <div>
            <h3>{title}</h3>
            <div onClick={()=> removeFromCart(id)} > <FaTrash /> Remove </div>
          </div>
        </div>
        <div>
          <button onClick={() => decreaseAmount(id)}> <IoMdRemove /> </button>
          <span>{amount} </span>
          <button onClick={() => increaseAmount(id)}><IoMdAdd /> </button>
        </div>
        <div>${price}</div>
        <div>
            {'$' + (price * amount).toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default CartDetails
