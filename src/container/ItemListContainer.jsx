// import ItemCount from "./ItemList/ItemList";
import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemList from "../components/ItemList/ItemList";

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch()
            .then((response) => setProducts(response))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1 className="m-4">{greeting}</h1>
            <div className="list">
                {loading ? <h1>Cargando...</h1> : <ItemList items={products} />}
            </div>
        </div>
    );
}

export default ItemListContainer;
