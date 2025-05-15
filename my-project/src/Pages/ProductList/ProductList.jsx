import React, { useContext } from 'react'
import { ShopContext } from '../../Components/ShopContext/ShopContext'

const ProductList = () => {
    const {products} = useContext(ShopContext)
  return (
    <div>
      <div>
       <h2>Our Elgant Collection</h2> 
      </div>
      <div>
        {products.map((product) => {
          const {id, image, title, price} = product;

          return (
            <div key={id}>
                <img src= {image} alt = "" />
                <div>
                  <h4>{title}</h4>
                  <p>$ {price}</p>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
