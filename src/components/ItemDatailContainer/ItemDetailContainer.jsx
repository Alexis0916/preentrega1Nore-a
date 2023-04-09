import { getUnProduct } from "../../asyncmock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getUnProduct(2)
      .then((res) => setProducto(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>
<ItemDetail {...producto} />

  </div>;
};

export default ItemDetailContainer;
