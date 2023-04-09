const products = [	
    { id: 1, name: 'Pintura para Paredes Drywall1', price: 600, img: "./assets/img/imgp/drywall1.jpg" },
    { id: 2, name: 'Pintura para Techos en Drywall', price: 700, img: "./src/assets/img/drywall2.jpg" },
    { id: 3, name: 'Pintura para Paredes interiores', price: 300, img: "./src/assets/img/interior1.jpg" },
    { id: 4, name: 'Pintura para Techos interiores', price: 400, img: "./src/assets/img/interior2.jpg" },
    { id: 5, name: 'Pintura para Paredes Exteriores', price: 450, img: "./src/assets/img/exterior1.jpg" },      
    { id: 6, name: 'Pintura para Techos Exteriores', price: 550, img: "./src/assets/img/exterior2.jpg" },
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}