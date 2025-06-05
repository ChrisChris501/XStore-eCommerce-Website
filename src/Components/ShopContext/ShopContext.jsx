import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

import Dress_List from "../../Components/Dress_List";

const ShopContextProvider = ({ children }) => {

    const [products, setProducts] = useState(Dress_List);
// Cart State
    const [cart, setCart] = useState([]);
// The amount State
    const [itemAmount, setItemAmount] = useState(0)
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
    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1};

        //Check if item is already in Cart
    const cartItem = cart.find ((item) => {
        return item.id === id;
    })

    if (cartItem) {
        const newCart = [...cart].map((item) => {
            if(item.id === id){
                return {...item, amount : cartItem.amount +1};
            } else {
                return item;
            }
        });
        setCart(newCart);
    } else {
        setCart([...cart, newItem])
    }
}

//Update item Amount

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setItemAmount(amount);
        }
    }, [cart])


    //remove an item from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart)
    }

    //clear cart
    const clearCart = () => {
        setCart([]);
    }

    //Increase the qantity 0f an item
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id ===id);
        addToCart(cartItem, id)
    }

    const decreaseAmount = (id) => {
        const cartItem = cart.find((item)=> item.id === id );

        if(cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount -1};
                } else {
                    return item;
                }
            });
            setCart(newCart)

        }
    };
        

    return (
        <ShopContext.Provider value={{products, total, addToCart, cart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount}}>
            {children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider