import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Tops.css";
const data=[
    {
        id:"34",
        name: "Men Bayaband Clog Blue Clogs Sandal",
        price: 2022,
        rating: "☆☆☆☆",
        desc: "Crocs chappal men",
        catg: "Fashion",
        oprice:2499,
        image: "https://rukminim1.flixcart.com/image/832/832/kg2l47k0-0/sandal/p/g/c/205089-4cc-crocs-navy-pepper-original-imafwe5hggsd5kzm.jpeg?q=70"
      },
      {
        id:"35",
        name: "Men Bayaband Clog Sgy/Lip Grey Clogs Sandal",
        price: 2027,
        rating: "☆☆☆☆",
        desc: "Crocs men chappal",
        catg: "Fashion",
        oprice:2499,
        image: "https://rukminim1.flixcart.com/image/832/832/kybvo280/sandal/g/9/y/3-205089-3-crocs-slate-grey-lime-punch-original-imagakybjyn9qedg.jpeg?q=70"
      },
      {
        id:"36",
        name: "Men Bayaband Logo Motion Clog Black Clogs Sandal",
        price: 2201,
        rating: "☆☆☆☆",
        desc: "Crocs men chappal",
        catg: "Fashion",
        oprice:2499,
        image: "https://rukminim1.flixcart.com/image/832/832/kmccosw0/sandal/d/i/n/11-206852-crocs-black-original-imagf9h9hcdxezhn.jpeg?q=70"
      },
]
const item=data[0];
const it=data[1];
const its=data[2];


function Tops() {
  const [use,setUse]=useState([]);
  useEffect(()=>{
    
fetch("http://localhost:5000/products")
.then((resp)=>resp.json())
.then((data)=>setUse(data))

},[])





  
  return (
    <>
    <div className="sugmain" style={{marginLeft:"5.3%"}} >
      <div className="sugfirst">
        <img src="https://rukminim1.flixcart.com/image/832/832/l407mvk0/sandal/m/m/c/-original-imagfyy69ey5bhfg.jpeg?q=70"/>
        <div className="text">
        <p style={{fontWeight:"bold"}} >Recommended Items</p>
        <p>Similar to Items You Viewed</p>
        </div>
        <div className="bts">
        <Link to={`/products/${item.catg}`}><button className="bt bt-primary">View all</button></Link>
        <img id="fder" src="https://cdn-icons-png.flaticon.com/512/6512/6512914.png"/>
        </div>
        </div></div>
    <div className="topmains">
      
       
            <div className="fdmain">
            <Link to={`/indprod/${item.id}`}><img id="crocss" src={item.image}/></Link>
                <p id="af" >{item.name}</p>
                <div className="bottomd">
                    <p id="as">{item.oprice}</p>
                    <p id="at">₹{item.price}</p>
                </div>
            </div>
            <div className="fdmains">
            <Link to={`/indprod/${it.id}`}><img id="crocs" src={it.image}/></Link>
                <p id="af" >{it.name}</p>
                <div className="bottomd">
                    <p id="as">{it.oprice}</p>
                    <p id="at">₹{it.price}</p>
                </div>
            </div>
            <div className="fdmainss">
            <Link to={`/indprod/${its.id}`}><img id="crocs" src={its.image}/></Link>
                <p id="af" >{its.name}</p>
                <div className="bottomd">
                    <p id="as">{its.oprice}</p>
                    <p id="at">₹{its.price}</p>
                </div>
            </div>
        
      
    </div>
    </>
  )
}

export default Tops
