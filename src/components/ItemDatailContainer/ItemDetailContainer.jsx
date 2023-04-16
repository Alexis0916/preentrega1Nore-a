import { getUnProduct } from "../../asyncmock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({onAdd}) => {
  const { id } = useParams();

  const [producto, setProducto] = useState();


  useEffect(() => {
    getUnProduct(id)
      .then((res) => {
        setProducto(res)
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <ItemDetail {...producto} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
