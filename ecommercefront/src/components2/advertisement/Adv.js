import React from 'react'
import { Link } from 'react-router-dom';
import "./adv.css";

function Adv() {
  return (
    <div className="advmain" >
      <img src="/images/ad.png"/>
      <div className="texts">
        <h3>Min. 70% Off</h3>
        <h4>Formal Shirts</h4>
        <Link to="/products/Fashion"><button  >SHOP NOW</button></Link>
      </div>
    </div>
  )
}

export default Adv
