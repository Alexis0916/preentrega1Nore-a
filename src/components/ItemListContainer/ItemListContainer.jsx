import React from "react";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock.js";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    getProducts()
    .then((res) => setProducts(res))
    .catch((err) => console.log(err))
  } , []);

  return ( 
      <div>
  <h2 className="sub"> {props.greeting} </h2>
  <ItemList products={products}/>
  </div>
  );

};

export default ItemListContainer;
