import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";
import Item from "../Item/Item";

const Cart = () => {

  // Importa el contexto del carrito
  const { carrito } = useContext(CarritoContext);
  console.log(carrito);



  return (
    <div>
      {
        carrito.length === 0 ? (
          <div>
            <h2>No hay productos en el carrito</h2>
            <Link to="/">Volver al inicio</Link>
          </div>
        ) : (
          <div>
            <h2>Productos en el carrito</h2>
            {
              carrito.map((producto) => (
                <Item producto={producto} />
              ))
            }
          </div>
        )
      }

    </div>
    )
}

export default Cart;
