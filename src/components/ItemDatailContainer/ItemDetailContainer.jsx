import { getUnProduct } from "../../asyncmock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState();

  console.log('id*********', id);

  useEffect(() => {
    getUnProduct(id)
      .then((res) => {
        console.log('res*********', res);
        setProducto(res)
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
