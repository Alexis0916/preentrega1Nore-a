import React from "react";
import "./CartWidget.css";

export const CartWidget = ({ countProducts }) => {
  return (
    <div className="Cart">
      <i className="bi bi-cart4"></i>
      <strong className="cartCantidad">{countProducts}</strong>
    </div>
  );
};

export default CartWidget;
