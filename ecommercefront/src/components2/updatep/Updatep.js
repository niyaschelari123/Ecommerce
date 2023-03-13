import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./updatep.css"
function Updatep() {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then((resp)=>resp.json())
        .then((data)=>setProducts(data))

    },[])
  return (
    <div className="updatemain">
      {products.map((item)=>{
        
        
        return(
            <div className="ravanu">
                <img src={item.image}/>
                <p>{item.name}</p>
                <p>₹.{item.price}</p>
                <Link to={`/update/${item._id}`}><button onClick={()=>{
                    localStorage.setItem("updateitem",JSON.stringify(item));
                }} >Edit</button></Link>
                
                </div>
        )
      })}
      
    </div>
  )
}

export default Updatep
