import { createContext, useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [orderId, setOrderId] = useState("");

    function addToCart(item) {
        const index = cartList.findIndex((product) => product.id === item.id);
        if (index !== -1) {
            const newQuantity = item.quantity;
            cartList[index].quantity += newQuantity;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, item]);
        }
    }

    const subtotalPrice = (price, qty) => {
        return price * qty;
    };

    const totalPrice = () => {
        return cartList.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
    };

    const totalItem = () => {
        return cartList.reduce((acc, cur) => acc + cur.quantity, 0);
    };

    const removeItem = (id) => {
        setCartList(cartList.filter((prod) => prod.id !== id));
    };

    const removeAll = () => {
        if (orderId !== "") setOrderId("");
        setCartList([]);
    };
    const resetOrderId = () => {
        setOrderId("");
    };
    const createOrder = (data) => {
        const db = getFirestore();
        const queryCollection = collection(db, "orders");

        let order = {};

        order.buyer = data;
        order.date = new Date();
        order.total = totalPrice(cartList);
        order.items = cartList.map((cartItem) => {
            const id = cartItem.id;
            const name = cartItem.title;
            const price = cartItem.price * cartItem.quantity;
            return { id, name, price };
        });

        addDoc(queryCollection, order)
            .then((resp) => setOrderId(resp.id))
            .finally(removeAll());
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                totalItem,
                removeAll,
                totalPrice,
                subtotalPrice,
                removeItem,
                createOrder,
                orderId,
                resetOrderId,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
