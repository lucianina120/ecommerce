import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
    const { cartList, clear } = useCartContext();
    return (
        <div>
            {cartList.map((cartItem) => (
                <div key={cartItem.id}>
                    <h2>Producto: {cartItem.title}</h2>
                    <h3>Cantidad: {cartItem.quantity}</h3>
                    
                </div>

            ))}
            <button className="btn" onClick={() => clear()}>Remover todos los items</button>
        </div>
    );
}

export default Cart;
