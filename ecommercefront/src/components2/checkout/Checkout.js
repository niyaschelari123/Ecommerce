import React, { useEffect, useState } from 'react'
import Checkouttop from './Checkouttop'
import "./checkout.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
    const history=useHistory();
    const [orderitems,setOrderitems]=useState([]);
    const [cart,setCart] = useState([]);
    const [order,setOrder] = useState([{}]);
    const [peru,setPeru] = useState("");
    const [payment,setPayment] = useState("Credit/debit Card")
    const totalprice=cart.reduce((total,item)=>total+=item.price*item.quantity,0);
    const totalquantity=cart.reduce((total,item)=>total+=item.quantity,0);
    useEffect(()=>{
        fetch("http://localhost:5000/cartItems")
        .then((resp)=>resp.json())
        .then((data)=>setCart(data))

        const peru=localStorage.getItem("peru");
        setPeru(peru);
        const x=localStorage.getItem(peru);
        const y=JSON.parse(x);
        setOrderitems(y);

    },[])

   


  return (
    <div style={{marginLeft:"50px"}} >
      
      <Checkouttop/>
      <div className="cartin">
        {cart.map((item)=>{
            return(
            <div className="cartde">
                <div className="look">
                    <img src={item.image}/>
                    <p style={{border:"1px solid grey",padding: "3px"}} >Quantity: {item.quantity}</p>
                    
                </div>
                <div className="looker">
                    <h6 style={{width:" 70%",overflow:"hidden"}} >{item.name}</h6>
                    <h4>₹{item.price}</h4>
                    <h6 style={{color:"green"}} >Free delivery</h6>
                    
                </div>
                
                

            </div>
            )
        })}
        <div classname="pdetails">
            <h3>Price Details</h3>
            <div className="deliv">
                <p>Price( {totalquantity} Items )</p>
                <p>₹{totalprice}</p>
                <p>Delivery Charges</p>
                <p style={{color:"green"}} >FREE DELIVERY</p>
            </div>
            
        </div>
        
      </div>

      <hr/>
      <div className="checkfinal">
        <h5>₹{totalprice}</h5>
        <label for="nowselect">Payment Method :
        <select style={{marginLeft:"10px",cursor:"pointer"}} id="nowselect" onChange={(e)=>setPayment(e.target.value)} >
            <option value="Credit/debit Card">Credit/debit Card</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
        </select></label>
        <button onClick={()=>{
            if(payment=="Cash on Delivery"){

            if (window.confirm("Are you sure you want to Confirm the order") == true) {
               
                  cart.forEach((item)=>{
                    orderitems.push(item);
                  })
                  orderitems.forEach((item)=>{
                    const a = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
                    item.ddate=a;
                    item.cancel="Cancel Order";
                  })
                  
                  console.log(orderitems);
                  const z=JSON.stringify(orderitems);
                 localStorage.setItem(peru,z);
                
                history.push("/ordered");
                

            }else{}
        }else if(payment=="Credit/debit Card"){
                history.push("/cards")
            }
        }} >{payment=="Cash on Delivery"?"Confirm the order":"Continue To Payment"}</button>
      </div>
    </div>
  )
}

export default Checkout
