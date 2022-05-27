import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
    const subtotalItem = (price, qty) => {
        return price * qty;
    };

    const total = (products) => {
        return products.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
    };

    const { cartList, clear } = useCartContext();
    console.log(cartList);
    return (
        <div className="small-container cart-page">
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
                {cartList.map((cartItem) => (
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={cartItem.pictureUrl} alt="" />
                                <div>
                                    <p>{cartItem.title}</p>
                                    <small>Price: $ {cartItem.price}</small>
                                    <br />
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>{cartItem.quantity}</td>
                        <td>
                            $ {subtotalItem(cartItem.price, cartItem.quantity)}
                        </td>
                    </tr>
                ))}
            </table>
            <tfoot>
                <tr>
                    <button className="btn" onClick={() => clear()}>
                        Vaciar el carrito
                    </button>
                </tr>
            </tfoot>
            <div className="total-price">
                <table>
                    <tr>
                        <td>Total</td>
                        <td>$ {total(cartList)}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Cart;
