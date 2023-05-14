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
      <div>
        <h1 className="carrito">Carrito</h1>
        <Link to="/">
          <button className="boton">Volver al inicio</button>
        </Link>

        <button  className="boton" onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
      {carrito.length === 0 ? (
        <div>
          <h2>No hay productos en el carrito</h2>
          <Link to="/">
              <button className="boton">Volver al inicio</button>
            </Link>
        </div>
      ) : (
        <div>
          <h2 className="productos">Productos en el carrito</h2>
          <h3>Total: ${precioTotal}</h3>
          <div className="product">
            {carrito.map((producto) => (
              <Item producto={producto} />
            ))}
          </div>
          <Link to="/pagar">
              <button className="boton">Pagar</button>
            </Link>
        </div>
      )}
    
    </div>
  );
};

export default Cart;
