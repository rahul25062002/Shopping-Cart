import React from "react";
import Cart from "./Cart";
import "./Header.css";
import {useDispatch} from "react-redux";
import { actions } from "../store/Cart-slice";
import {authAction} from "../store/auth-slice";



const Header = () => {
   
   const dispatch= useDispatch();
  const ShowTheCart =()=>{
    dispatch(actions.showcart());
  }
  let dispatch2 = useDispatch();
  const getout=()=>{
       dispatch2(authAction.logout());

  }

   

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <button onClick={getout}>logout</button>

          </li>

          <li>
            <button style={{backgroundColor:"white" , color:"black" }} onClick={ShowTheCart} >
              <Cart />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
