import { Link } from "react-router-dom";
import "./CartWidget.css";

function CartWidget() {
    return (
        <Link to="/cart">
            <div className="cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>

            </div>
        </Link>
    );
}

export default CartWidget;
