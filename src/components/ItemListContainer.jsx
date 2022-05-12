// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const data = [
    {
        id: 1,
        title: "hamburguesa",
        price: 900,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/burger/burger3.jpg",
    },
    {
        id: 2,
        title: "pizza",
        price: 400,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/pizza/pizza2.jpg",
    },
    {
        id: 3,
        title: "pancho",
        price: 800,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/burger/burger72.jpg",
    },
    {
        id: 4,
        title: "arroz",
        price: 1100,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/rice/rice18.jpg",
    },
    {
        id: 6,
        title: "pasta",
        price: 1200,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/pasta/pasta21.jpg",
    },
    {
        id: 7,
        title: "hamburguesa",
        price: 900,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/burger/burger3.jpg",
    },
    {
        id: 8,
        title: "pizza",
        price: 400,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/pizza/pizza2.jpg",
    },
    {
        id: 9,
        title: "pancho",
        price: 800,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/burger/burger72.jpg",
    },
    {
        id: 10,
        title: "arroz",
        price: 1100,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/rice/rice18.jpg",
    },
    {
        id: 11,
        title: "arroz2",
        price: 1300,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/biryani/biryani41.jpg",
    },
    {
        id: 12,
        title: "pasta",
        price: 1200,
        pictureUrl:
            "https://foodish-api.herokuapp.com/images/pasta/pasta21.jpg",
    },
];


function ItemListContainer({ greeting }) {

    // function onAdd(count) {
    //     alert(`Se agregaron ${count} item al carrito`);
    // }

    return (
        <div>
            <h1 className="m-4">{greeting}</h1>
            {/* <ItemCount stock={7} initial={1} onAdd={onAdd} /> */}
            <ItemList items={data} />
        </div>
    );
}

export default ItemListContainer;
