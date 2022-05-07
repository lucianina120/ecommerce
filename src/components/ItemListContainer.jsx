import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {

    function onAdd (count){
        alert(`Se agregaron ${count} item al carrito`)
      }
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;
