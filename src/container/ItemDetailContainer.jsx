import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import { useParams } from "react-router-dom";

import ItemDetail from "../components/ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { detailId } = useParams();

    useEffect(() => {
        getFetch(detailId)
            .then((response) => setItem(response))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="content">
            {loading ? <h1>Cargando...</h1> : <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;
