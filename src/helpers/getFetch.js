const products = [
    {
        id: 1,
        title: "blusa cobain",
        description: "Lorem ipsum dolor s it, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 900,
        pictureUrl: "/assets/image/blusa-cobain.jpg",
        stock: 10,
    },
    {
        id: 2,
        title: "blusa rose",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 400,
        pictureUrl: "/assets/image/blusa-rose.jpg",
        stock: 7,
    },
    {
        id: 3,
        title: "blusa madonna",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 800,
        pictureUrl:
            "/assets/image/blusa-madonna.jpg",
        stock: 3,
        },
    {
        id: 4,
        title: "blusa joel",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 1100,
        pictureUrl: "/assets/image/blusa-joel.jpg",
        stock: 8,
    },
    {
        id: 5,
        title: "blusa collins",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 1100,
        pictureUrl: "/assets/image/blusa-collins.jpg",
        stock: 5,
    },
    {
        id: 6,
        title: "blusa morrison",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 1200,
        pictureUrl:
            "/assets/image/blusa-morrison.jpg",
        stock: 7,
        },
];
// export const getFetch = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(products);
//     }, 2000);
// });

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? products.find((producto) => producto.id === id) : products
            resolve(query)
        }, 2000)
    })
}