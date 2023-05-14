import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock.js";
import ItemList from "../ItemList/ItemList.jsx";

import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (params.id === undefined) {
      getProducts()
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => console.log(err));
      return;
    }

    getProductsByCategory(params.id)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
