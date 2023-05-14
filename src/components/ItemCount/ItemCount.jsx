import { useContext, useState } from "react";
import "./ItemCount.css";
import { CarritoContext } from "../../context/CarritoContext";

const ItemCount = ({ onAdd, stock, id, name, price, img, description }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  console.log(carrito);

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
    const newProduct = {
      id,
      name,
      price,
      img,
      description,
      quantity,
    };

    const isInCart = carrito.find((prod) => prod.id === id);

    if (isInCart) {
      const newCart = carrito.map((prod) => {
        if (prod.id === id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
      setCarrito(newCart);
    } else {
      setCarrito([...carrito, newProduct]);
    }

    //onAdd(quantity);
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
