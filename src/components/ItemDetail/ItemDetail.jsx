import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    let { title, description, price, pictureUrl, stock } = item;

    function onAdd(count) {
        alert(`Se agregaron ${count} item al carrito`);
    }

    return (
        <div className="card">
            <img className="card-img-top" src={pictureUrl} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <h5 className="card-title">${price}</h5>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
