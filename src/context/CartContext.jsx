import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, qty) => {
        const newItem = { ...item, qty };
        setCart([...cart, newItem]);
    };
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
