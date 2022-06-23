import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./EmptyCart.css";

function EmptyCart() {
    const { orderId, resetOrderId } = useCartContext();

    return (
        <div className="empty-container">
            {orderId ? (
                <>
                    <h3>
                        Pedido enviado! <br /> Nro de pedido: {orderId}
                    </h3>
                    <p>¿Deseas seguir comprando?</p>
                    <Link to="/">
                        <button
                            className="btn-return"
                            onClick={() => resetOrderId()}
                        >
                            Volver al inicio
                        </button>
                    </Link>
                </>
            ) : (
                <>
                    <h3>El pedido está vacío</h3>
                    <p>¿Deseas seguir comprando?</p>
                    <Link to="/">
                        <button className="btn-return">Volver al inicio</button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default EmptyCart;
