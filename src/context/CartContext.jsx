import { createContext, useContext, useState } from "react";

const CartContext = createContext();
//de esta forma reducimos la cantidad de funciones que exportamos para usar context en otros componentes
//es decir nos evita exportar useContext para ejecutar un contexto
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    function addToCart(item) {
        setCartList([...cartList, item]);
    }

    // const removeItem = (itemId) =>{
    //     setCartList([...cartList, item])
    // }
    const clear = () => {
        setCartList([]);
    };
    return (
        <CartContext.Provider value={{ cartList, addToCart, clear }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
