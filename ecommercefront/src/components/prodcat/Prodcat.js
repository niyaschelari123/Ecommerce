import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../Product';

function Prodcat() {
    const {name}=useParams();
    const [products,setProducts] = useState([]);

    useEffect(()=>{
    fetch("http://localhost:5000/products")
    .then((resp)=>resp.json())
    .then((data)=>setProducts(data))
    },[]);

    
    const filter=products.filter((item)=>item.catg==name);
  return (
    <div>
      <h1 style={{textAlign:"center"}} >{name}</h1>
      <div className="arrange">
      {filter.map((item)=>{
        
        return(
            <Product item={item} key={item.id} />
        );
        
      })}
      </div>
    </div>
  )
}

export default Prodcat
