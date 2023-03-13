import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function Otp() {
  const [orderitems,setOrderitems]=useState([]);
  const [peru,setPeru] = useState("");
    const [otp,setOtp] = useState("");
    const [cart,setCart] = useState([]);
    const history=useHistory();

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
    <div className="otp">
  <h6>Please Enter the OTP</h6>
  <input type="number" onChange={(e)=>setOtp(e.target.value)} />
  <button onClick={()=>{
    if(otp=="893661"){
        if(window.confirm("Are you sure you want to confirm the order")==true){
          cart.forEach((item)=>{
            orderitems.push(item);
          })
          orderitems.forEach((item)=>{
            item.cancel="Cancel Order";
            const a = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
                    item.ddate=a;
          })
          
          console.log(orderitems);
          const z=JSON.stringify(orderitems);
         localStorage.setItem(peru,z);


            axios.post("http://localhost:5000/ordered").then((resp)=>{})
                .catch((err)=>{})

      history.push("/ordered");
        }
    }else{
        alert("Invalid OTP")
    }

  }} >Submit</button>
</div>
  )
}

export default Otp
