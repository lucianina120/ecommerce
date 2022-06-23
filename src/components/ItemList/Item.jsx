import { Link } from "react-router-dom";

import "./Item.css";

function Item({ product }) {
    let { id, title, price, pictureUrl } = product;
    return (
        <div className="card">
            <div className="card-img">
                <Link to={`/detail/${id}`}>
                    <img src={pictureUrl} alt="aros" />
                </Link>
            </div>
            <div className="card-content">
                <div className="product-name">
                    <Link to={`/detail/${id}`}>
                        <h3>{title}</h3>
                    </Link>
                </div>
                <div className="price-rating">
                    <h2>${price}</h2>
                    <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Item;
