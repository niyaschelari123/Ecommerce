import axios from 'axios'
import React,{useEffect, useState} from 'react'
import "./Product.css"
import {useSelector,useDispatch} from "react-redux";
import { loginActions } from './slice/loginSlice';
import { Link } from 'react-router-dom';



function Product({item}) {

  const dispatch=useDispatch();
  const visible=useSelector((state)=>state.login.visible);

    const {id,name,price,rating,description,category,image} = item;
    const [carts,setCarts] = useState([]);
    const [quantity,setQuantity] = useState(0);
    const[totalPrice,setTotalPrice] = useState(price);
    const[flag,setFlag]=useState(true);
    

 const addCart=()=>{
  axios.post("http://localhost:5000/addCart",{
    id,
    name,
    price,
    image,
    quantity:1,
  })
  .then((resp)=>console.log("added"))
  .catch((err)=>console.log(err))
  dispatch(loginActions.toggle());

 }

  return (
    <div className="containerr" id={item.id} >
        <Link  style={{textDecoration:"none",color:"black"}} to={`/indprod/${id}`}><div className="ic">
        <img src={item.image} className="icd" />
        </div>
        <div className="tit">
            <p id="ty">{item.name}</p>
        </div></Link>
        <div className="det">
            <p id="po">₹.{item.price}</p>
            <p id="por">{item.rating}</p>
            
        </div>
        <button id="boy" onClick={addCart} >Add to Cart</button>

      
    </div>
  )
}

export default Product
