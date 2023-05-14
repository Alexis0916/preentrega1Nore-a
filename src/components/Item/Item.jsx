import React from "react";
import "./Item.css";
import { Link, useLocation } from "react-router-dom";

const Item = ({ producto }) => {
  const { id, name, price, img, quantity = undefined } = producto;

  //validar si estoy en /cart con usePathname
  const location = useLocation();


  return (
    <div className="cardProducto">
      <img className="imgProducto" src={`./../imgpublic/${img}`} alt={name} />
      <h3> {name}</h3>
      <p>
        {" "}
        <strong>Precio: </strong> {price}
      </p>
      <p>
        {" "}
        <strong>ID: </strong> {id}
      </p>
     
        {location.pathname === "/cart" ? (
          <>
            {
              quantity === undefined ? null : ( <p> <strong>Cantidad: </strong> {quantity}</p> )
            }
          </>
        ) : (
          <button className="btnProducto">
            <Link className="link-test text-decoration-none" to={`/item/${id}`}>
              Ver Detalles
            </Link>
          </button>
        )}
      
    </div>
  );
};

export default Item;
