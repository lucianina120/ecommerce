// import ItemCount from "./ItemList/ItemList";
import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import "./ItemListContainer.css";
import Loader from "../Loader/Loader";

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const db = getFirestore()
    //     const dbQuery = doc(db, 'items', 'AeJnEIWikhjtvYO96lW5')
    //     getDoc(dbQuery)
    //     .then((resp)=> console.log({id: resp.id, ...resp.data})) //con data extraigo todos los valores
    // })

    //
    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryCollection = collection(db,'product')
    //     getDocs(queryCollection)
    //     .then((resp) => setProducts(resp.docs.map(item => ({id:item.id, ...item.data()}))))
    //     .catch((err) => console.error(err))
    //     .finally(() => setLoading(false));
    // })


    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryCollection = collection(db,'product')
    //     const queryCollectionFilter = query(queryCollection, where('price', '>', 1500))
    //     getDocs(queryCollectionFilter)
    //     .then((resp) => setProducts(resp.docs.map(item => ({id:item.id, ...item.data()}))))
    //     .catch((err) => console.error(err))
    //     .finally(() => setLoading(false));
    // },[])


    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        if (categoryId) {
            getFetch()
                .then((response) =>
                    setProducts(
                        response.filter(
                            (prods) => prods.category === categoryId
                        )
                    )
                )
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        } else {
            getFetch()
                .then((response) => setProducts(response))
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [categoryId]);

    return (
        <div className="main">
            <div className="products-grid">
                {loading ? (
                    <Loader/>
                ) : (
                    <ItemList items={products} />
                )}
            </div>
        </div>
    );
}

export default ItemListContainer;
