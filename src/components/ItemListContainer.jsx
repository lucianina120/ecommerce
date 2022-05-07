import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={7} />
        </div>
    );
}

export default ItemListContainer;
