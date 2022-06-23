import { useCartContext } from "../../context/CartContext";

import "./ItemCart.css";

function ItemCart() {
    const { cartList, removeAll, totalPrice, subtotalPrice, removeItem } =
        useCartContext();

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map((cartItem) => (
                        <tr key={cartItem.id} className="singleItem">
                            <td>
                                <div className="cart-info">
                                    <img src={cartItem.pictureUrl} alt="" />
                                    <div>
                                        <p>{cartItem.title}</p>
                                        <small>Price: $ {cartItem.price}</small>
                                        <br />
                                        <button
                                            className="btn"
                                            onClick={() =>
                                                removeItem(cartItem.id)
                                            }
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>{cartItem.quantity}</td>
                            <td>
                                ${" "}
                                {subtotalPrice(
                                    cartItem.price,
                                    cartItem.quantity
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            <button className="btn" onClick={() => removeAll()}>
                                <i
                                    className="fa fa-trash-o"
                                    aria-hidden="true"
                                ></i>{" "}
                                Vaciar el carrito
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className="total-price">
                <table>
                    <tbody>
                        <tr>
                            <td>Total</td>
                            <td>$ {totalPrice()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ItemCart;
