import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
    const { cartList, clear, total,subtotalItem, remove } = useCartContext();
    const [emptyCart, setEmptyCart] = useState(false);


    const generarOrden = () => {
        let orden = {};

        orden.buyer = {
            name: "Lucia",
            phone: "2804456456",
            email: "lu@mail.com",
        };

        orden.total = total(cartList);
        orden.items = cartList.map((cartItem) => {
            const id = cartItem.id;
            const name = cartItem.title;
            const price = cartItem.price;
            return { id, name, price };
        });
        const db = getFirestore();
        const queryCollection = collection(db, "orders");
        addDoc(queryCollection, orden)
            .then((resp) => console.log(resp))
            .finally(clear());
    };

    return (
        <>
            {emptyCart ? (
                <h2>Carito vacio</h2>
            ) : (
                <div className="small-container cart-page">
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
                                            <img
                                                src={cartItem.pictureUrl}
                                                alt=""
                                            />
                                            <div>
                                                <p>{cartItem.title}</p>
                                                <small>
                                                    Price: $ {cartItem.price}
                                                </small>
                                                <br />
                                                <button
                                                    className="btn"
                                                    onClick={() =>
                                                        remove(
                                                            cartItem.id
                                                        )
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
                                        {subtotalItem(
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
                                    <button
                                        className="btn"
                                        onClick={() => clear()}
                                    >
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
                            <tr>
                                <td>Total</td>
                                <td>$ {total()}</td>
                                <button
                                    onClick={() => generarOrden()}
                                    className="btn"
                                >
                                    {" "}
                                    Realizar compra
                                </button>
                            </tr>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
