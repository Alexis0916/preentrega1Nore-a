import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const CartWidget = ({ countProducts }) => {

  const { carrito } = useContext(CarritoContext);




  return (

    
    <div>
      <i className="bi bi-cart4"></i>
      <strong className="cartCantidad">{countProducts}</strong>
      


<Link to="/cart">Ver Carrito</Link>

    </div>


  );
};

export default CartWidget;
