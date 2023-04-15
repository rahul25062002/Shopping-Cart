import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

import { useSelector,useDispatch} from 'react-redux';
import Notification from "./components/Notification.js";
import {uiAction} from "./store/UI-slice.js"



let firstrender=true;
function App() {
  const dispatch=useDispatch();
  const cart= useSelector((state)=>state.cart);
  const notification=useSelector((state)=>state.ui.notification)
  const isloginin = useSelector((state) => state.auth.isloginin);
  console.log(isloginin);
  useEffect(()=>{
    if(firstrender){
      firstrender = false;
      return ;
    }
    const sendRequest=async ()=>{
      //Send state as sending request
      dispatch(uiAction.shownotification({
        type:"warning",
        message:".....sending",
        open:true

      }))
      const responses=await fetch("https://redux-shopping-cart-app-a57e5-default-rtdb.firebaseio.com/cartitem.json",{
    method: "PUT",
    body: JSON.stringify(cart),
  });
  const data= await responses.json();
  // if(data!==null){
          dispatch(
            uiAction.shownotification({
              type: "success",
              message: "Request Send Successfully",
              open: true,
            })
          );
  // }
  //send state as request is sent successfully
    };
    sendRequest().catch(err=>{
      //send request as error
            dispatch(
              uiAction.shownotification({
                type: "warning",
                message: "Error",
                open: true,
              })
            );
    });

    
  },[cart]);



  return (
    <div className="App">
{ notification && <Notification  type={notification.type}  message={notification.message}/>}
      
{ !isloginin &&     <Auth />}
      { isloginin && <Layout />} 
    </div>
  );
}

export default App;
