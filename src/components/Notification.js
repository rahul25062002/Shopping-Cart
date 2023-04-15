import React from 'react'
import {Alert} from '@mui/material'
import { uiAction } from "../store/UI-slice.js";
import { useSelector ,useDispatch} from "react-redux";
const Notification = ({type,message}) => {
  const dispatch= useDispatch();
  const notification=useSelector(state=>state.ui.notification);
  const handleClose=() => {
          dispatch(uiAction.shownotification({open:false}))
  }
  return (
    <div>
{ notification.open &&  <Alert onClick={handleClose} severity={type} >{message}</Alert>}
    </div>
  )
}

export default Notification; 