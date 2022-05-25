import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
    let { id, title, price, pictureUrl } = item;
    return (
        // <div className="card-item">
        //     <div className="photo">
        //         <img  alt="" />
        //     </div>
        //     <div className="description">
        //         <h3>{title}</h3>
        //         <p>
        //             Descripcion: Lorem ipsum dolor sit amet consectetur,
        //             adipisicing elit.
        //         </p>
        //         <h3></h3>
        //         <Link to={`/detail/${id}`}>
        //         <button>Detalles</button>
        //         </Link>
        //     </div>
        // </div>
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
