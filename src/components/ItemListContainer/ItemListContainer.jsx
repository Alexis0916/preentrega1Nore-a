import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock.js";
import ItemList from "../ItemList/ItemList.jsx";

import "./ItemListContainer.css";

const ItemListContainer = (props) => {

  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    if( params.id === 'exterior'){
      getProducts()
      .then((res) => {
        setProducts(res.filter(prod => prod.category === 'exterior'))
      })
      .catch((err) => console.log(err));
    } 

    if( params.id === 'interior'){
      getProducts()
      .then((res) => {
        setProducts(res.filter(prod => prod.category === 'interior'))
      }
      )
      .catch((err) => console.log(err));
    }

    if( params.id === 'drywall'){
      getProducts()
      .then((res) => {
        setProducts(res.filter(prod => prod.category === 'drywall'))
      }
      )
      .catch((err) => console.log(err));
    }

  }, [params]);




  return (
    <div>
      <h2 className="sub"> {props.greeting} </h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
