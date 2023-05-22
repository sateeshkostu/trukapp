import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";


const Maybeshownavbar = ({children}) =>{  //you export the children prop in app.js

    const location = useLocation()
    const [showbar, setshowbar] = useState(false)

    useEffect(() => {
        console.log('this is location:', location)
        if (location.pathname === '/login') {
            setshowbar(false)  //here 
        } else{
            setshowbar(true)
        }
    },[location])
    return(
        <div>{showbar && children}</div>  //showbar and children are props
    )
}
export default Maybeshownavbar