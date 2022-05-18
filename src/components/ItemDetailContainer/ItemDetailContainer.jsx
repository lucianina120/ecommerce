import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState()
    useEffect(() => {
        getFetch(1)
            .then((response) => setItem(response))
            .finally('promesa finalizada');
    }, []);
    console.log(item)
    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;
