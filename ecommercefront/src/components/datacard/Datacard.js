import React from 'react'
import "./new.css";
function Datacard({item}) {
  return (
    <div className="dcard">
        <img src={item.image} onClick={()=>{window.location.replace('/addproduct/#sub')}} />
        <p id="mun">{item.name}</p>
        <p id="kin">{item.id}</p>
        <p id="poii">{item.offer}</p>
      
    </div>
  )
}

export default Datacard
