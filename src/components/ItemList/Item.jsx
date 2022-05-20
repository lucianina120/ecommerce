import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
    let { id, title, price, pictureUrl } = item;
    return (

        <div className="card-item">
            <div className="photo">
                <img src={pictureUrl} alt="" />
            </div>
            <div className="description">
                <h3>{title}</h3>
                <p>
                    Descripcion: Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit.
                </p>
                <h3>${price}</h3>
                <Link to={`/detail/${id}`}>
                <button>Detalles</button>
                </Link>
            </div>
        </div>
    );
}
export default Item;
