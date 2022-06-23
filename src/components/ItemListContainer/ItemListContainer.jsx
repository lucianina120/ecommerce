import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";

import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

import "./ItemListContainer.css";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "product");
        const queryCollectionFilter = categoryId
            ? query(queryCollection, where("category", "==", categoryId))
            : queryCollection;
        setLoading(true);
        getDocs(queryCollectionFilter)
            .then((resp) => {
                resp.empty
                    ? navigate("/")
                    : setProducts(
                          resp.docs.map((item) => ({
                              id: item.id,
                              ...item.data(),
                          }))
                      );
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [categoryId,navigate]);

    return (
        <div className="main">
            <div className="products-grid">
                {loading ? <Loader /> : <ItemList products={products} />}
            </div>
        </div>
    );
}

export default ItemListContainer;
