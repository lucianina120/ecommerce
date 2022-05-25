import Exchange from "../Exchange/Exchange";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    let { title, description, price, pictureUrl, category } = item;

    return (
        <div>
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img src={pictureUrl} id="productImg" alt="" />
                    </div>
                    <div className="col-2">
                        <p>Inicio / {category}</p>
                        <h1>{title}</h1>
                        <h4>${price}</h4>
                        <Exchange>{item}</Exchange>
                        <h3>
                            Detalles de producto
                            <i className="fa fa-indent" aria-hidden="true"></i>
                        </h3>
                        <br />
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
