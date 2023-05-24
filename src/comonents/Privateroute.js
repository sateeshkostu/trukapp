import React from "react";
import { Navigate, Outlet } from 'react-router-dom';


const Privateroute = (props) =>{
  
  return(
    props.auth.token ? <Outlet/> : <Navigate to="/login"/>
  )
}


export default Privateroute;