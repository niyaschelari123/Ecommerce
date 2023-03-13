import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loginActions } from '../../components/slice/loginSlice';
import "./Indprod.css"
function Indprod() {
    const {id}=useParams();
    const [products,setProducts] = useState([]);
    const quantity=1;
    const dispatch=useDispatch();
    useEffect(()=>{
    fetch("http://localhost:5000/products")
    .then((resp)=>resp.json())
    .then((data)=>setProducts(data))
    },[]);
    const filter=products.filter((item)=>item.id==id);
    const data=filter[0];
    console.log(id);
    console.log(filter);
    
  return (
    <div className="indmain">
        {filter.map((item)=>{
            return(
                <>
                <div className="innermain">
        <div className="imjg">
            <img src={item.image}/>
        </div>
        <div className="texts">
            <h3>{item.name}</h3>
            <h3 id="pprice" style={{color:"red"}} >₹.{item.price}</h3>
            <h3 id="dinku" style={{textAlign:"center",color:"yellow",backgroundColor:"grey"}} >{item.rating}</h3>
            <button onClick={()=>{
                 axios.post("http://localhost:5000/addCart",{
                    id:item.id,
                    name:item.name,
                    price:item.price,
                    image:item.image,
                    quantity:quantity,
                  })
                  .then((resp)=>console.log("added"))
                  .catch((err)=>console.log(err))
                  dispatch(loginActions.toggle());

            }} >𝔸𝕕𝕕 𝕥𝕠 𝕔𝕒𝕣𝕥</button>
        </div>
        </div>
        <div className="descr">
            <p>{item.description}</p>
        </div>
        </>
        )
        })}
    </div>
  )
}

export default Indprod
