import React, { useState } from 'react'
import "./checkout.css";
function Checkouttop() {
    const [name,setName]=useState("Niyas u");
    const [pin,setPin] = useState("676317");
    const [hno,setHno]= useState("515");
    const [mobile,setMobile] = useState("8301893661");
    const [city,setCity]=useState("Moonniyoor");
    const [type,setType] = useState("Home");
    const [area,setArea] = useState("Chelari");
    const [state,setState] = useState("Kerala");
    const [flag,setFlag] = useState(false);

  return (
    <div className="adhipan">
    <div className="checktop">
        <div className="bottoms">
        <h4>Deliver to:</h4>
        <button onClick={()=>setFlag(true)} >Change</button>
        </div>
        <div className="bots">
        <h4>{name}</h4>
        <p>{type}</p>
        </div>
        <div className="rows">
            <p>{hno},</p>
            <p>{area},</p>
            <p>{city},</p>
            <p>{pin}</p>
        </div>
        <p>{mobile}</p>
    </div>
    {flag?<div className="changead">
        
        <form className="hereit">
            <input id="name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter full name" />
            <input type="number" id="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Enter Mobile number" /> 
            <div className="grided">
                <input type="number" id="pin" value={pin} onChange={(e)=>setPin(e.target.value)} placeholder="Enter pin" />
                <input type="number" id="hno" value={hno} onChange={(e)=>setHno(e.target.value)} placeholder="Enter House Number" />
                <input type="text" id="state" value={state} onChange={(e)=>setState(e.target.value)} placeholder="Enter state" />
                <input type="text" id="area" value={area} onChange={(e)=>setArea(e.target.value)} placeholder="Enter Area/colony/Road name" />
            </div>
            <input type="text" id="city" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter City" />
            <div className="typevalue">
            <label for="type">Home<input type="checkbox" id="type" value="Home" onChange={(e)=>setType(e.target.value)} /></label>
            <label for="type">Work<input type="checkbox" id="type" value="Work" onChange={(e)=>setType(e.target.value)} /></label>
            </div>
            <button onClick={()=>setFlag(false)} >Save Address</button>
        </form>
    </div>:""}
    </div>
  )
}

export default Checkouttop
