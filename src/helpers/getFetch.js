const products = [
    {
        id: "1",
        title: "blusa cobain",
        description:
            "Camisa mangas largas de fit recto oversized, con largo irregular siendo más corto el delantero que la espalda. Cuello clásico camisero con cartera de botones a tono a la vista. En las mangas posee una tira que permite rebatirlas. Tiene tajos en los laterales que le aportan amplitud a la prenda. Un ítem versátil que te permite lograr diferentes looks. Podes utilizarla cerrada o abierta con nuestra clásica Musculosa Valencia!",
        price: 2900,
        pictureUrl: "/assets/images/blusas/6.jpg",
        stock: 10,
        category: "blusas",
    },
    {
        id: "2",
        title: "blusa rose",
        description:
            "Camisa mangas largas de fit recto oversized, con largo irregular siendo más corto el delantero que la espalda. Cuello clásico camisero con cartera de botones a tono a la vista. En las mangas posee una tira que permite rebatirlas. Tiene tajos en los laterales que le aportan amplitud a la prenda. Un ítem versátil que te permite lograr diferentes looks. Podes utilizarla cerrada o abierta con nuestra clásica Musculosa Valencia!",
        price: 2400,
        pictureUrl: "/assets/images/blusas/1.jpg",
        stock: 7,
        category: "blusas",
    },
    {
        id: "3",
        title: "blusa madonna",
        description:
            "Camisa mangas largas de fit recto oversized, con largo irregular siendo más corto el delantero que la espalda. Cuello clásico camisero con cartera de botones a tono a la vista. En las mangas posee una tira que permite rebatirlas. Tiene tajos en los laterales que le aportan amplitud a la prenda. Un ítem versátil que te permite lograr diferentes looks. Podes utilizarla cerrada o abierta con nuestra clásica Musculosa Valencia!",
        price: 3800,
        pictureUrl: "/assets/images/blusas/2.jpg",
        stock: 3,
        category: "blusas",
    },
    {
        id: "4",
        title: "blusa joel",
        description:
            "Camisa mangas largas de fit recto oversized, con largo irregular siendo más corto el delantero que la espalda. Cuello clásico camisero con cartera de botones a tono a la vista. En las mangas posee una tira que permite rebatirlas. Tiene tajos en los laterales que le aportan amplitud a la prenda. Un ítem versátil que te permite lograr diferentes looks. Podes utilizarla cerrada o abierta con nuestra clásica Musculosa Valencia!",
        price: 3100,
        pictureUrl: "/assets/images/blusas/3.jpg",
        stock: 8,
        category: "blusas",
    },
    {
        id: "5",
        title: "blusa collins",
        description:
            "Camisa mangas largas de fit recto oversized, con largo irregular siendo más corto el delantero que la espalda. Cuello clásico camisero con cartera de botones a tono a la vista. En las mangas posee una tira que permite rebatirlas. Tiene tajos en los laterales que le aportan amplitud a la prenda. Un ítem versátil que te permite lograr diferentes looks. Podes utilizarla cerrada o abierta con nuestra clásica Musculosa Valencia!",
        price: 3100,
        pictureUrl: "/assets/images/blusas/4.jpg",
        stock: 5,
        category: "blusas",
    },
    {
        id: "6",
        title: "blusa morrison",
        description:
            "Camisa mangas largas de fit recto oversized, con largo irregular siendo más corto el delantero que la espalda. Cuello clásico camisero con cartera de botones a tono a la vista. En las mangas posee una tira que permite rebatirlas. Tiene tajos en los laterales que le aportan amplitud a la prenda. Un ítem versátil que te permite lograr diferentes looks. Podes utilizarla cerrada o abierta con nuestra clásica Musculosa Valencia!",
        price: 3200,
        pictureUrl: "/assets/images/blusas/5.jpg",
        stock: 7,
        category: "blusas",
    },
    {
        id: "7",
        title: "Pantalon",
        description:
            "Clásico jean corte mom de calce rígido y tonalidad celeste. Es un clásico e indispensable en tu placard. Ideal para cada estación del año. Es de tiro alto con pierna semi recta y roturas en la zona de las rodillas que le brinda un estilo más relajado al look. Posee cinco bolsillos.",
        price: 2900,
        pictureUrl: "/assets/images/pantalones/1.jpg",
        
        stock: 10,
        category: "pantalones",
    },
    {
        id: "8",
        title: "Pantalon ",
        description:
            "Clásico jean corte mom de calce rígido y tonalidad celeste. Es un clásico e indispensable en tu placard. Ideal para cada estación del año. Es de tiro alto con pierna semi recta y roturas en la zona de las rodillas que le brinda un estilo más relajado al look. Posee cinco bolsillos.",
        price: 2400,
        pictureUrl: "/assets/images/pantalones/2.jpg",
        stock: 7,
        category: "pantalones",
    },
    {
        id: "9",
        title: "Pantalon ",
        description:
            "Clásico jean corte mom de calce rígido y tonalidad celeste. Es un clásico e indispensable en tu placard. Ideal para cada estación del año. Es de tiro alto con pierna semi recta y roturas en la zona de las rodillas que le brinda un estilo más relajado al look. Posee cinco bolsillos.",
        price: 3800,
        pictureUrl: "/assets/images/pantalones/3.jpg",
        stock: 3,
        category: "pantalones",
    },
    {
        id: "10",
        title: "Pantalon ",
        description:
            "Clásico jean corte mom de calce rígido y tonalidad celeste. Es un clásico e indispensable en tu placard. Ideal para cada estación del año. Es de tiro alto con pierna semi recta y roturas en la zona de las rodillas que le brinda un estilo más relajado al look. Posee cinco bolsillos.",
        price: 3100,
        pictureUrl: "/assets/images/pantalones/4.jpg",
        stock: 8,
        category: "pantalones",
    },
    {
        id: "11",
        title: "Pantalon ",
        description:
            "Clásico jean corte mom de calce rígido y tonalidad celeste. Es un clásico e indispensable en tu placard. Ideal para cada estación del año. Es de tiro alto con pierna semi recta y roturas en la zona de las rodillas que le brinda un estilo más relajado al look. Posee cinco bolsillos.",
        price: 3100,
        pictureUrl: "/assets/images/pantalones/5.jpg",
        stock: 5,
        category: "pantalones",
    },
    {
        id: "12",
        title: "Pantalon",
        description:
            "Clásico jean corte mom de calce rígido y tonalidad celeste. Es un clásico e indispensable en tu placard. Ideal para cada estación del año. Es de tiro alto con pierna semi recta y roturas en la zona de las rodillas que le brinda un estilo más relajado al look. Posee cinco bolsillos.",
        price: 3200,
        pictureUrl: "/assets/images/pantalones/6.jpg",
        stock: 7,
        category: "pantalones",
    },
    {
        id: "13",
        title: "Sweater",
        description:
            "Sweater de mangas largas confeccionado en hilado grueso, una fibra muy suave y cálida al tacto. Fit entallado, con cuello medio y tejido de ribb en la totalidad de la prenda. Este modelo se distingue por poseer un cierre en el cuello con tirador de arandela metálica que te permite utilizarlo tanto abierto como cerrado. Confeccionado en 80% rayón y 20% poliéster. Sumale nuestro Tapado Pitahaya para lograr un look casual y otoñal!",
        price: 2900,
        pictureUrl: "/assets/images/abrigos/1.jpg",
        
        stock: 10,
        category: "abrigos",
    },
    {
        id: "14",
        title: "Sweater",
        description:
            "Sweater de mangas largas confeccionado en hilado grueso, una fibra muy suave y cálida al tacto. Fit entallado, con cuello medio y tejido de ribb en la totalidad de la prenda. Este modelo se distingue por poseer un cierre en el cuello con tirador de arandela metálica que te permite utilizarlo tanto abierto como cerrado. Confeccionado en 80% rayón y 20% poliéster. Sumale nuestro Tapado Pitahaya para lograr un look casual y otoñal!",
        price: 2400,
        pictureUrl: "/assets/images/abrigos/2.jpg",
        stock: 7,
        category: "abrigos",
    },
    {
        id: "15",
        title: "Sweater",
        description:
            "Sweater de mangas largas confeccionado en hilado grueso, una fibra muy suave y cálida al tacto. Fit entallado, con cuello medio y tejido de ribb en la totalidad de la prenda. Este modelo se distingue por poseer un cierre en el cuello con tirador de arandela metálica que te permite utilizarlo tanto abierto como cerrado. Confeccionado en 80% rayón y 20% poliéster. Sumale nuestro Tapado Pitahaya para lograr un look casual y otoñal!",
        price: 3800,
        pictureUrl: "/assets/images/abrigos/3.jpg",
        stock: 3,
        category: "abrigos",
    },
    {
        id: "16",
        title: "Sweater",
        description:
            "Sweater de mangas largas confeccionado en hilado grueso, una fibra muy suave y cálida al tacto. Fit entallado, con cuello medio y tejido de ribb en la totalidad de la prenda. Este modelo se distingue por poseer un cierre en el cuello con tirador de arandela metálica que te permite utilizarlo tanto abierto como cerrado. Confeccionado en 80% rayón y 20% poliéster. Sumale nuestro Tapado Pitahaya para lograr un look casual y otoñal!",
        price: 3100,
        pictureUrl: "/assets/images/abrigos/4.jpg",
        stock: 8,
        category: "abrigos",
    },
    {
        id: "17",
        title: "Sweater",
        description:
            "Sweater de mangas largas confeccionado en hilado grueso, una fibra muy suave y cálida al tacto. Fit entallado, con cuello medio y tejido de ribb en la totalidad de la prenda. Este modelo se distingue por poseer un cierre en el cuello con tirador de arandela metálica que te permite utilizarlo tanto abierto como cerrado. Confeccionado en 80% rayón y 20% poliéster. Sumale nuestro Tapado Pitahaya para lograr un look casual y otoñal!",
        price: 3100,
        pictureUrl: "/assets/images/abrigos/5.jpg",
        stock: 5,
        category: "abrigos",
    },
    {
        id: "18",
        title: "Sweater",
        description:
            "Sweater de mangas largas confeccionado en hilado grueso, una fibra muy suave y cálida al tacto. Fit entallado, con cuello medio y tejido de ribb en la totalidad de la prenda. Este modelo se distingue por poseer un cierre en el cuello con tirador de arandela metálica que te permite utilizarlo tanto abierto como cerrado. Confeccionado en 80% rayón y 20% poliéster. Sumale nuestro Tapado Pitahaya para lograr un look casual y otoñal!",
        price: 3200,
        pictureUrl: "/assets/images/abrigos/6.jpg",
        stock: 7,
        category: "abrigos",
    },
];

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id
                ? products.find((producto) => producto.id === id)
                : products;
            resolve(query);
        }, 1000);
    });
};
