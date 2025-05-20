import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

import Dress_List from "../../Components/Dress_List";

const ShopContextProvider = ({ children }) => {

    const [products, setProducts] = useState(Dress_List);

    return (
        <ShopContext.Provider value={{products}}>
            {children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider