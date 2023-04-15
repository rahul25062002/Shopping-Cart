import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import {useSelector} from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  let total = 0;
  let listitem = useSelector((state) => state.cart.itemList);
listitem.forEach((item)=>{
  total+=item.totalprice;
})
    const cartshow = useSelector((state) => state.cart.showcart);
    console.log(cartshow);
    

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
      { cartshow && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
