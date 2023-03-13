import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState,memo } from "react";


import Signin from "./Signin";
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search/Search';

function Lay() {
    
    const visible=useSelector((state)=>state.login.visible);
    const dispatch=useDispatch();
   
   
    useEffect(()=>{
        setName(localStorage.getItem("name")!==null?
        localStorage.getItem("name"):"kuthira");
        setPeru(localStorage.getItem("peru")!==null?
        localStorage.getItem("peru"):"");

    },[visible])
    const [flag,setFlag] = useState(false);
    const[peru,setPeru]=useState("under");
    const [name,setName] = useState("");
    const [cartItems,setCartItems] = useState([]);
    console.log(name+peru+"hi")
    
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".cartt")
        search.classList.toggle("active", window.scrollY > 70)
      })

 

useEffect(()=>{
  fetch("http://localhost:5000/cartItems")
  .then((res)=>res.json())
  .then((dta)=>setCartItems(dta));
  
},[visible]);
  return (
    <div>
      <nav className="cartt">
        <ul>
          <li>
            <Link to="/"><img id="hoom" src="https://www.freeiconspng.com/uploads/icones-png-theme-home-19.png" onClick={()=>{window.scrollTo(0,0)}} /></Link>
          </li>
          <li >
            <Link to="/cart"><img className={`${cartItems.length<1?"cimg":"cimgg"}`} src="https://cdn-icons-png.flaticon.com/512/891/891462.png"/></Link>
          </li>
          <li>
            <Link to='/addProduct'><img src="https://cdn-icons-png.flaticon.com/512/4715/4715131.png"  className={`${name==peru ?"ap":"bp"}`} /></Link>
            
          </li>
          <li>
          <Search/>
          </li>
          <li>
            <Link to="/signin" title="profile" style={{textDecoration:"none"}} ><img className={`${peru?"cim":"cimg"}`} src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"  /></Link>
            <Link to={`/profile/${peru}`} style={{textDecoration:"none",color: "white"}} ><p className={`${peru ? "actives" : "uuname"}`} style={{fontSize:"20px",textAlign:"center",marginTop:"15px"}} >{peru}</p></Link>
          </li>
          
        </ul>
        <div id="cnumber">
          <h6 id="hfive" >{cartItems.length}</h6>
        </div>
      </nav>
    </div>
  )
}

export default Lay
