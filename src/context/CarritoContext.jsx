import { createContext, useState } from "react";

export const CarritoContext = createContext(); //! 1. Crear el contexto




export const CarritoProvider = ({ children }) => { //! 2. Crear el provider
 
    const [products, setProducts] = useState([]);

    const [carrito, setCarrito] = useState([]); 

    console.log(carrito);

    const data = {
        products,
        setProducts,
        carrito,
        setCarrito
    }; //! 3. Crear el objeto de datos

    return (
        <CarritoContext.Provider value={data}> {/* //! 4. Pasarle el objeto de datos al provider */}
            {children} 
        </CarritoContext.Provider>
    )
}