import { createContext, useContext, useState } from "react";

const CartContext = createContext();
//de esta forma reducimos la cantidad de funciones que exportamos para usar context en otros componentes
//es decir nos evita exportar useContext para ejecutar un contexto
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    function addToCart(item) {
        const index = cartList.findIndex(product => product.id === item.id)
        if (index !== -1){
            const newQuantity = item.quantity
            cartList[index].quantity += newQuantity
            setCartList([...cartList]);
        }else{
            setCartList([...cartList, item]); 
        }
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter( prod => prod.id !== id))
    }
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
        <CartContext.Provider value={{ cartList, addToCart, totalItem, clear, total,subtotalItem, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
