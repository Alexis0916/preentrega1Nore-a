import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const CartWidget = ({ countProducts }) => {

  const { carrito } = useContext(CarritoContext);
  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);



  return (

    
    <div>
      <i className="bi bi-cart4"></i>
      <strong className="cartCantidad">{countProducts}</strong>
      
{totalCantidad}

<Link to="/cart">Ver Carrito</Link>

    </div>


  );
};

export default CartWidget;
