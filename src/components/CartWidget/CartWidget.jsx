import { Link } from "react-router-dom";
import "./CartWidget.css";
import { useCartContext } from "../../context/CartContext";
function CartWidget() {
    const { cartList } = useCartContext();
    
    const totalItem = (products) => {
        return products.reduce( (acc, cur) => acc + cur.quantity,0 );
  
    };


    return (
        <Link to="/cart">
            <div className="cart">
                <small>Mi compra ({totalItem(cartList)})</small>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
        </Link>
    );
}

export default CartWidget;
