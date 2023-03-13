import React from 'react'
import { Link } from 'react-router-dom'
import "./Suggested.css"

function Suggested() {
  return (
    <>
    <div className="sugmain">
      <div className="sugfirst">
        <img src="https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"/>
        <div className="text">
        <p style={{fontWeight:"bold"}} >Suggested for You</p>
        <p>Based on Your Activity</p>
        </div>
        <div className="bts">
        <Link to= "/products/Electronic"><button className="bt bt-primary">View all</button></Link>
        <img id="fder" src="https://cdn-icons-png.flaticon.com/512/6512/6512914.png"/>
        </div>

      </div>
      </div>
      <div className="sugout">
      <div className="sugsec">
      <Link to="/indprod/23"><img src="https://cdn1.smartprix.com/rx-iNtIVAEE5-w420-h420/samsung-galaxy-s22-u.jpg"/></Link>
        
        <p style={{marginLeft:"80px"}} >Samsung Galaxy S22 Ultra</p>
        <div className="text">
       <span style={{textDecoration:"line-through"}}>149999</span> <p style ={{fontWeight:"bold"}} > ₹. 118999</p>
       </div>
        <p style={{color:"green",fontStrength:"170px",marginLeft:"80px"}} >EMI from 2000/month</p>
        <Link to= "/indprod/23"><img id="tom" src="https://m.media-amazon.com/images/I/61KKzNXy-FL._SY450_.jpg"/>
        <img id="jerry" src="https://m.media-amazon.com/images/I/51TUyA8hXWL._SX679_.jpg" />
        <img src="https://c.tenor.com/JwTqyx1UVdoAAAAC/samsung-samsung-galaxy.gif" id="gif" /></Link>
      </div>
    </div>
    <div className="vid">
        
    </div>
    
    
    </>
  )
}

export default Suggested
