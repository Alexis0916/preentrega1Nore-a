import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";

const ItemDatail = ({ id, name, price, img, description, onAdd, stock }) => {

  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };



  return (
    <div className="contenedorItem">
      <h2> <strong>Nombre: </strong>{name}</h2>
      <h3> <strong>Precio: </strong> {price}</h3>
      <h3> <strong>ID: </strong> {id}</h3>

      <p> <strong> Descripcion: </strong> {description}</p>
      {!img ? null : (
        <img className="imgDetail" src={`./../imgpublic/${img}`} alt={name} />
      )}
      <h5 className="stock">Stock: {stock}</h5>

      <div className="itemCount">
        <ItemCount onAdd={onAdd} stock={stock} />
      </div>
      <button className="buttonVolver" onClick={handleVolver}> Volver </button>
    </div>
  );
};

export default ItemDatail;
