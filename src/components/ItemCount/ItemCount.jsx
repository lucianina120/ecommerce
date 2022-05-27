import "./ItemCount.css";
import {  useState } from "react";
import { useCartContext } from "../../context/CartContext";

function ItemCount( {product, countModified} ) {
    const [count, setCount] = useState(1);
    const { addToCart } = useCartContext()

    function add() {
        if (count < product.stock) {
            setCount(count + 1);
        }
    }

    function reduce() {
        if (count > 1 && count <= product.stock) {
            setCount(count - 1);
        }
    }

    function onAdd() {
        addToCart({...product, quantity : count}) 
        countModified();
    }
    return (
        <div className="card-count">
            <div className="count">
                <button className="btn-count" onClick={reduce}>
                    -
                </button>
                <span>{count}</span>
                <button className="btn-count" onClick={add}>
                    +
                </button>
            </div>
            <button className="btn-add fluid mt-1" onClick={onAdd}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;
