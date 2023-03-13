import { useEffect, useState,memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Signin from "./Signin";

const Layout = () => {
  const [admin,setAdmin]=useState("");
  
 const visible=useSelector((state)=>state.login.visible);
 const dispatch=useDispatch();

  
console.log(admin);
console.log("why");


const name=localStorage.getItem("name");
setAdmin(name);
console.log(name);

 
if(admin){
    
  document.getElementById("cimg").style.display="none";
  document.getElementById("uuname").style.display="block";
}
  const [cartItems,setCartItems] = useState([]);
  const [user,setUser] = useState("niyas");

useEffect(()=>{
  fetch("http://localhost:5000/cartItems")
  .then((res)=>res.json())
  .then((dta)=>setCartItems(dta))
  
},[visible]);
  return (
    <>
      <nav id="cartt" >
        <ul>
          <li>
            <Link to="/"><img id="hoom" src="https://www.freeiconspng.com/uploads/icones-png-theme-home-19.png"/></Link>
          </li>
          <li >
            <Link to="/cart"><img className="cimage" src="https://cdn-icons-png.flaticon.com/512/126/126083.png"/></Link>
          </li>
          <li>
            <Link to='/addProduct'><img src="https://cdn2.iconfinder.com/data/icons/ecommerce-outline-version/32/add_product_new_product_item_ecommerceproduct-512.png" id="ap" /></Link>
          </li>
          <li>
            <Link to="/signin"><img id="cimg" src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"/></Link>
            <p id="uuname" style={{fontSize:"20px",textAlign:"center",display:"none",marginTop:"15px"}} >{name}</p>
          </li>
          
        </ul>
        <div id="cnumber">
          <h6 id="hfive" >{cartItems.length}</h6>
        </div>
      </nav>

      
    </>
  )
}

export default Layout;
