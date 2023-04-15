import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { actions } from "./../store/Cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(actions.removefromList(
      id
    
      ));
    
  };
  const addHandler = () => {
    dispatch(
      actions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>$ {price} /-</p>
      <p>{quantity}</p>
      <article>Total $ {total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
