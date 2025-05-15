import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);

import { Dress_List } from "../../Components/Dress_List";

const ShopContextProvider = ({ children }) => {

    const [products, setProducts] = useState(Dress_List);

    return (
        <ShopContextProvider.Provide value={(products)}>
            {children}
        </ShopContextProvider.Provide>
    )
};

export default ShopContextProvider