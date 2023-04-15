import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "./Cart.css";
const CartItems = () => {
  const items= useSelector((state)=>state.cart.itemList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        
         {items.map((item)=>(
          <li key={item.id}>
            {" "}
            <CartItem
              id={item.id}
              price={item.price}
              quantity={item.quantity}
              name={item.name}
              total={item.totalprice}
            />
            {" "}
          </li>

         ))}
        
      </ul>
    </div>
  );
};

export default CartItems;
