import React from 'react'
import "./ordered.css";
function Ordered() {
  return (
    <div className="ordermain" style={{display:"flex",flexDirection:"column",alignItems:"center",gap: "30px"}} >
      <img style={{height: "400px"}} src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"/>
      <h3>Order Placed Successfully</h3>
      <h5>Your item will be delivered in 5 days</h5>
    </div>
  )
}

export default Ordered
