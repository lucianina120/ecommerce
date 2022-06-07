import React, { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";
import Loader from "../Loader/Loader";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { detailId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, "product", detailId);
        getDoc(dbQuery)
            .then((resp) => setItem({ id: resp.id, ...resp.data() })) //con data extraigo todos los valores
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [detailId]);

    // useEffect(() => {
    //     getFetch(detailId)
    //         .then((response) => {
    //             setItem(response);
    //         })
    //         .catch((err) => console.error("err"))
    //         .finally(() => setLoading(false));
    // }, []);
    return (
        <div className="content">
            {loading ? <Loader /> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
