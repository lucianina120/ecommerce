const products = [
    {
        id: "1",
        title: "blusa cobain",
        code: "123-123",
        color: ["azul", "rojo", "amarillo"],

        description:
            "Lorem ipsum dolor s it, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 900,
        pictureUrl: "/assets/image/blusa-cobain.jpg",
        pictureUrlTest: [
            "/assets/image/blusa-cobain.jpg",
            "/assets/image/blusa-rose.jpg",
            "/assets/image/blusa-rose.jpg",
            "/assets/image/blusa-cobain.jpg",
        ],
        stock: 10,
        category: "blusas",
    },
    {
        id: "2",
        title: "blusa rose",
        code: "123-123",
        color: ["azul", "rojo", "amarillo"],
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 400,
        pictureUrl: "/assets/image/blusa-rose.jpg",
        pictureUrlTest: [
            "/assets/image/blusa-cobain.jpg",
            "/assets/image/blusa-rose.jpg",
            "/assets/image/blusa-cobain.jpg",
            "/assets/image/blusa-rose.jpg",
        ],
        stock: 7,
        category: "blusas",
    },
    {
        id: "3",
        title: "blusa madonna",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 800,
        pictureUrl: "/assets/image/blusa-madonna.jpg",
        stock: 3,
        category: "blusas",
    },
    {
        id: "4",
        title: "blusa joel",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 1100,
        pictureUrl: "/assets/image/blusa-joel.jpg",
        stock: 8,
        category: "remeras",
    },
    {
        id: "5",
        title: "blusa collins",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 1100,
        pictureUrl: "/assets/image/blusa-collins.jpg",
        stock: 5,
        category: "remeras",
    },
    {
        id: "6",
        title: "blusa morrison",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eos facere officiis consequatur consequuntur harum, saepe ipsa suscipit hic cum corporis corrupti doloremque beatae dolore dignissimos nostrum? Quaerat, cum consectetur!",
        price: 1200,
        pictureUrl: "/assets/image/blusa-morrison.jpg",
        stock: 7,
        category: "remeras",
    },
];

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id
                ? products.find((producto) => producto.id === id)
                : products;
            resolve(query);
        }, 2000);
    });
};
