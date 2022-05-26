import React, { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { detailId } = useParams();

    useEffect(() => {
        getFetch(detailId)
            .then((response) => {
                setItem(response); 
            })
            .catch((err) => console.error("err"))
            .finally(() => setLoading(false));
    }, []);
    return (
        <div className="content">
            {loading ? (
                <div className="loader">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            ) : (
                <ItemDetail item={item} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
