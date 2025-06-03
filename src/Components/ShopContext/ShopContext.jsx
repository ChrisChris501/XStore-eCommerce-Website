import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

import Dress_List from "../../Components/Dress_List";

const ShopContextProvider = ({ children }) => {

    const [products, setProducts] = useState(Dress_List);
// Cart State
    const [cart, setCart] = useState([]);
// The amount State
    const [itemAmount, setAmount] = useState(0)
// Total Price state
    const [total, setTotal] = useState(0);

//Get total amount

        useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            const priceAsNumber = parseFloat(currentItem.price);

            if (isNaN(priceAsNumber)) {
            return accumulator;
            }

            return accumulator + priceAsNumber * currentItem.amount;
        }, 0);

        setTotal(total);
        }, [cart]);

        //add to cart
    const addToCart = (product) => {
        const newItem = {...product, amount: 1};
        console.log(newItem)
}

    return (
        <ShopContext.Provider value={{products, total, addToCart}}>
            {children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider