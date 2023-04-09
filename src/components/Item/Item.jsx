import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { id, name, price, img } = producto;

  return (
    <div className="cardProducto">
      <img className="imgProducto" src={`./../imgpublic/${img}`} alt={name} />
      <h3>Uso: {name}</h3>
      <p>Precio: {price}</p>
      <p>ID: {id}</p>
      <button className="btnProducto">
        {" "}
        <Link className="text-decoration-none" to={`/item/${id}`}>
          Ver Detalles
        </Link>{" "}
      </button>
    </div>
  );
};

export default Item;
