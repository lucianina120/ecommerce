// import ItemCount from "./ItemList/ItemList";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import "./ItemListContainer.css";
import Loader from "../Loader/Loader";

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    // useEffect(() => {
    //     const db = getFirestore();
    //     const queryCollection = collection(db, "product");
    //     const queryCollectionFilter = query(
    //         queryCollection,
    //         where("category", "==", categoryId)
    //     );
    //     getDocs(queryCollectionFilter)
    //         .then((resp) =>
    //             setProducts(
    //                 resp.docs.map((item) => ({ id: item.id, ...item.data() }))
    //             )
    //         )
    //         .catch((err) => console.error(err))
    //         .finally(() => setLoading(false));
    // }, []);

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "product");
        setLoading(true);
          if (categoryId) {
            const queryCollectionFilter = query(
                queryCollection,
                where("category", "==", categoryId)
            );
            getDocs(queryCollectionFilter)
                .then((resp) =>
                    setProducts(
                        resp.docs.map((item) => ({
                            id: item.id,
                            ...item.data(),
                        }))
                    )
                )
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        } else {

            getDocs(queryCollection)
                .then((resp) =>
                    setProducts(
                        resp.docs.map((item) => ({
                            id: item.id,
                            ...item.data(),
                        }))
                    )
                )
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [categoryId]);

    return (
        <div className="main">
            <div className="products-grid">
                {loading ? <Loader /> : <ItemList items={products} />}
            </div>
        </div>
    );
}

export default ItemListContainer;
