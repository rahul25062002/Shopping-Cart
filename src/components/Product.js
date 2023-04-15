import React from "react";
import { useDispatch } from "react-redux";
import {actions} from "../store/Cart-slice"

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  
  const dispatch= useDispatch();
  const add=()=>{
        dispatch(actions.addToCart(
          {
            name,
            id,
            price
          }));
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={add}>Add to cart</button>
    </div>
  );
};

export default Product;
