
const products = [	
    { id: 1, name: ' Paredes Drywall', price:  600, img: "drywall1.jpg" ,  category: "drywall" },
    { id: 2, name: ' Techos en Drywall', price:  700, img: "drywall2.jpg " , category: "drywall" },
    { id: 3, name: ' Paredes interiores', price:  300, img: "interior1.jpg", category: "interior" },
    { id: 4, name: ' Techos interiores', price:  400, img: "interior2.jpg" , category: "interior" },
    { id: 5, name: ' Paredes Exteriores', price:  450, img: "exterior1.jpg", category: "exterior" },   
    { id: 6, name: ' Techos Exteriores', price:  550, img: "exterior2.jpg", category: "exterior" },
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export const getUnProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = products.find((prod) => prod.id === id);
            resolve(producto);
        }, 2000);
    });
}