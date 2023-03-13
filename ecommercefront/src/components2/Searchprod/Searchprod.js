import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../../components/Product';

function Searchprod() {
    
    const {name}=useParams();
    const namel=name.toLowerCase();
    const [products,setProducts] = useState([]);

    useEffect(()=>{
    fetch("http://localhost:5000/products")
    .then((resp)=>resp.json())
    .then((data)=>setProducts(data))
    },[]);

    
    const filter=products.filter((item)=>item.name.toLowerCase().includes(namel));
  return (
    <div>
        {filter.length>0?
      
      <div className="arrange">
      {filter.map((item)=>{
        
        return(
            <Product item={item} key={item.id} />
        );
        
      })}
      </div>:
      <h1>No such Products</h1>}
    </div>
  )
}

export default Searchprod
