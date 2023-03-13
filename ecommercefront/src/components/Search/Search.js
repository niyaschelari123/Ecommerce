import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Search.css"
function Search() {
  const [search,setSearch] = useState("");
  return (
    <div className="sear">
      <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
     <Link to={`/searchedproducts/${search}`} > <img src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" onClick={()=>{
      setTimeout(()=>{
        setSearch("");

      },3000)
     }} /></Link>
    </div>
  )
}

export default Search
