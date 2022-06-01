import { createContext, useContext, useState } from "react";

const CartContext = createContext();
//de esta forma reducimos la cantidad de funciones que exportamos para usar context en otros componentes
//es decir nos evita exportar useContext para ejecutar un contexto
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    function addToCart(item) {
        // const index = cartList.findIntex(product => product.id === item.id)
        // if (index !== -1){
        //     const oldQuantity = cartList[index].quantity
        //     cartList[index].quantity += oldQuantity
        //     setCartList([...cartList]);
        // }else{
            setCartList([...cartList, item]);
        // }
    }

    // const removeItem = (itemId) =>{
    //     setCartList([...cartList, item])
    // }
    const subtotalItem = (price, qty) => {
        return price * qty;
    };

    const total = () => {
        return cartList.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
    };

    const totalItem = () => {
        return cartList.reduce((acc,cur) => acc.quantity + cur.quantity )
    }
    const clear = () => {
        setCartList([]);
    };
    return (
        <CartContext.Provider value={{ cartList, addToCart, totalItem, clear, total,subtotalItem}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
