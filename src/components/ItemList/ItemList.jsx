import Item from "./Item";

function ItemList({ items }) {
    return items.map((product) => <Item key={product.id} item={product} />);
}
export default ItemList;
