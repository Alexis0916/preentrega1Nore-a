import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ onAdd, stock }) => {


  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addProduct = () => {
    onAdd(quantity);
  };

  return (
    <div className="counter">
      <div className="counterControls d-flex justify-content-center">
        <button className="buttonagg" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="buttonagg" onClick={increment}>
          +
        </button>
      </div>

      <div>
        <button className="aggCart" onClick={addProduct}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
