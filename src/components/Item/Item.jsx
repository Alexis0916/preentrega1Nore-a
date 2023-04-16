import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { id, name, price, img } = producto;

  return (
    <div className="cardProducto">
      <img className="imgProducto" src={`./../imgpublic/${img}`} alt={name} />
      <h3> {name}</h3>
      <p> <strong>Precio: </strong> {price}</p>
      <p> <strong>ID: </strong> {id}</p>
      <button className="btnProducto">
        
        <Link className="link-test text-decoration-none" to={`/item/${id}`}>
          Ver Detalles
        </Link>
      </button>
    </div>
  );
};

export default Item;
