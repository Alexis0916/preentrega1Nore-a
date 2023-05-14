import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";

const cart = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const total = carrito.reduce(
    (total, producto) => total + producto.cantidad * producto.item.price,
    0
  );

  if (totalCantidad === 0) {
    return (
      <>
        <h2> No hay Productos en el Carrito</h2>
        <Link to="/"> Volver al Inicio</Link>
      </>
    );
  }
  return (
    <div>
        {carrito.map(producto => <CartItem key={producto.id} {...producto} /> )}
        <h3> Total de Productos: $ {total}</h3>
        <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
        <link to="/checkout"> Finalizar Compra </link>
        </div>
    )
}

export default cart;
