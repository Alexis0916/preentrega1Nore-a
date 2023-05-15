import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";
import Item from "../Item/Item";
import "./cart.css";

const Cart = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    const precioTotal = carrito.reduce(
      (total, producto) => total + producto.quantity * producto.price,
      0
    );
    setPrecioTotal(precioTotal);
  }, [carrito]);

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div>
    <div className="carrito">
      <div>
        <h1 className="carritoTittle" >Carrito</h1>
      </div>
      <div>
        <Link className="enlace" to="/">
          <button className="boton">Volver al inicio</button>
        </Link>
      </div>
      <div>
        <button className="boton" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
      </div>
<div >
{carrito.length === 0 ? (
        <div>
          <h2 className="carritoTittle" >No hay productos en el carrito</h2>
          <Link className="enlace" to="/">
            <button className="boton">Volver al inicio</button>
          </Link>
        </div>
      ) : (

        <div>       
          <h2 className="carritoTittle">Productos en el carrito</h2>
          <h3 className="carritoTittle">Total: ${precioTotal}</h3>
          <div className="productContainer">
          <div className="product">
            {carrito.map((producto) => (
              <Item producto={producto} />
            ))}
          </div>

          </div>

          <Link className="enlace" to="/pagar">
            <button className="boton">Pagar</button>
          </Link>
        </div>
      )}
</div>
</div>

  );
};

export default Cart;
