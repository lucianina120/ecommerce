import {
    addDoc,
    collection,
    getFirestore,
} from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const { cartList, clear, total, subtotalItem, removeItem } =
        useCartContext();

    function handleInputChange(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    const generarOrden = () => {
        const db = getFirestore();
        const queryCollection = collection(db, "orders");

        let orden = {};

        orden.buyer = data;
        orden.date = new Date();
        orden.total = total(cartList);
        orden.items = cartList.map((cartItem) => {
            const id = cartItem.id;
            const name = cartItem.title;
            const price = cartItem.price * cartItem.quantity;
            return { id, name, price };
        });

        addDoc(queryCollection, orden)
            .then((resp) => alert(`El id de su compra es ${resp.id} `))
            .finally(clear());
        
    };

    if (total() === 0) {
        return (
            <div className="empty-container">
                <h2>El carrito esta vacio</h2>
                <p>
                    {" "}
                    ¿Deseas seguir comprando?{" "}
                    <Link to="/">
                        <span>Volver al inicio</span>
                    </Link>
                </p>
            </div>
        );
    }

    return (
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
                            <button className="btn" onClick={() => clear()}>
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
                    </tr>
                </table>
            </div>
            <div id="form-container">
                <h1>Datos del comprador</h1>
                <div className="underline"></div>
                <form action="#" method="post" id="contact_form">
                    <div className="name">
                        <label for="name"></label>
                        <input
                            type="text"
                            placeholder="Mi nombre es"
                            name="name"
                            id="name_input"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="email">
                        <label for="email"></label>
                        <input
                            type="email"
                            placeholder="Mi e-mail es"
                            name="email"
                            id="email_input"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="phone">
                        <label for="name"></label>
                        <input
                            type="text"
                            placeholder="Mi telefono es"
                            name="phone"
                            id="phone_input"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="submit">
                        <input
                            type="submit"
                            onClick={() => generarOrden()}
                            value="Realizar compra"
                            id="form_button"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cart;
