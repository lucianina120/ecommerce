import { Link } from "react-router-dom";
import "./CartWidget.css";

function CartWidget() {
    return (
        <Link to="/cart">
            <div className="cart">
                <i className="bi bi-cart2"></i>
            </div>
        </Link>
    );
}

export default CartWidget;
