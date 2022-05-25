// import ItemCount from "./ItemList/ItemList";
import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
    console.log(categoryId);
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
                    <div className="loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                ) : (
                    <ItemList items={products} />
                )}
            </div>
        </div>
    );
}

export default ItemListContainer;
