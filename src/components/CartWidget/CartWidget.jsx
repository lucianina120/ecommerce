import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";

import "./CartWidget.css";

function CartWidget() {
    const { totalItem } = useCartContext();

    return (
        <Link to="/cart">
            <div className="cart">
                <small>Mi compra ({totalItem()})</small>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
        </Link>
    );
}

export default CartWidget;
