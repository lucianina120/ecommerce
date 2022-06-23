import FormCart from "../FormCart/FormCart";
import ItemCart from "../ItemCart/ItemCart";
import EmptyCart from "../EmptyCart/EmptyCart";

import { useCartContext } from "../../context/CartContext";

import "./Cart.css";

function Cart() {
    const { totalPrice } = useCartContext();

    if (totalPrice() === 0) {
        return (
            <div className="cart-page">
                <EmptyCart />
            </div>
        );
    }

    return (
        <div className="cart-page">
            <ItemCart />
            <FormCart />
        </div>
    );
}

export default Cart;
