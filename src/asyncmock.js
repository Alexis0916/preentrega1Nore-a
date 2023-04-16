
const products = [
    { id: "1", name: 'Paredes Drywall', price: 600, img: "drywall1.jpg", category: "drywall", description: "Paredes construidas con placas de yeso laminado, ideales para interiores.", stock: "2" },
    { id: "2", name: 'Techos en Drywall', price: 700, img: "drywall2.jpg", category: "drywall", description: "Techos construidos con placas de yeso laminado, ideales para interiores.", stock: "3" },
    { id: "3", name: 'Paredes interiores', price: 300, img: "interior1.jpg", category: "interior", description: "Paredes diseñadas para separar ambientes interiores.", stock: "4" },
    { id: "4", name: 'Techos interiores', price: 400, img: "interior2.jpg", category: "interior", description: "Techos diseñados para cubrir ambientes interiores.", stock: "5" },
    { id: "5", name: 'Paredes Exteriores', price: 450, img: "exterior1.jpg", category: "exterior", description: "Paredes diseñadas para resistir los elementos del exterior, construidas con materiales de alta resistencia.", stock: "6" },
    { id: "6", name: 'Techos Exteriores', price: 550, img: "exterior2.jpg", category: "exterior", description: "Techos diseñados para resistir los elementos del exterior, construidos con materiales de alta resistencia.", stock: "2" },
    { id: "7", name: 'Brocha Gruesa', price: 80, img: "brochagruesa.jpg", category: "adicionales", description: "Brocha con cerdas gruesas para aplicar pintura en superficies ásperas.", stock: "10" },
    { id: "8", name: 'Brocha Delgada', price: 60, img: "brochadelgada.jpg", category: "adicionales", description: "Brocha con cerdas delgadas para aplicar pintura en superficies lisas.", stock: "8" },
    { id: "9", name: 'Rodillo', price: 100, img: "rodillo.jpg", category: "adicionales", description: "Rodillo para aplicar pintura en grandes superficies.", stock: "7" },
    { id: "10", name: 'Pincel', price: 30, img: "pincel.jpg", category: "adicionales", description: "Pincel para detalles y acabados finos.", stock: "16" },
    { id: "11", name: 'Porta Pintura', price: 40, img: "portapintura.jpg", category: "adicionales", description: "Porta pintura con depósito para facilitar la aplicación de pintura en superficies amplias.", stock: "15" },
    ];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

export const getUnProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = products.find((prod) => prod.id === id);
            console.log('producto' , producto)
            resolve(producto);
        }, 1000);
    });
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productos = products.filter((prod) => prod.category === category);
            resolve(productos);
        }, 1000);
    });
}