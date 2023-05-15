import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext"; 

export const CartWidget = ({ countProducts }) => {

 const { carrito } = useContext(CarritoContext); 

 const [totalCantidad, setTotalCantidad] = useState(0);

  useEffect(() => {
    const totalCantidad = carrito.reduce( (total, producto) => total + producto.quantity, 0 );
    setTotalCantidad(totalCantidad);
  }, [carrito]);



  return (
    <div className="bi-cart4">
      <strong className="cartCantidad">{totalCantidad}</strong>
    </div>
  );
};

export default CartWidget;
