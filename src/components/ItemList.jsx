import "./ItemList.css";
import Item from "./Item";
import { useEffect, useState } from "react";

function ItemList({ items }) {

    const getFetch = new Promise((resolve) => {
        setTimeout(function () {
            resolve(items);
        }, 2000);
    });
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getFetch
            .then((response) => setProducts(response))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);
    return (
        <div className="list">
            {loading 
            ? 
            <h1>Cargando...</h1>  
            :
            products.map((product) => (
                <Item item={product} />
            ))}
        </div>
    );
}
export default ItemList;
