import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    const { detailId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, "product", detailId);
        getDoc(dbQuery)
            .then((resp) => {
                resp.exists()
                    ? setProduct({ id: resp.id, ...resp.data() })
                    : navigate("/");
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [detailId,navigate]);

    return (
        <div className="content">
            {loading ? <Loader /> : <ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer;
