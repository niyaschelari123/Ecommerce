import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Updatepage.css";
function Updatepage() {
    const {id} = useParams();
    const [products,setProducts] = useState([]);

    

    
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then((resp)=>resp.json())
        .then((data)=>setProducts(data))

    },[])
    
    const x=localStorage.getItem("updateitem");
    const y=JSON.parse(x);
    console.log(y);
    const _id=y.id;

    const[name,setName]=useState(y.name);
  const[price,setPrice] = useState(y.price);
  const[rating,setRating] = useState(y.rating);
  const[desc,setDesc]=useState(y.description);
  const[catg,setCatg]=useState(y.catg);
  const[image,setImage]=useState(y.image);

  const filter=products.filter((item)=>item._id==id);

  

    const handleSubmit=(e)=>{
        console.log(name+price+rating+desc+catg+image);
        e.preventDefault();
        if(!name || !price || !rating || !desc || !catg || !image){
          alert("Please fill all fields")
        }else{
    
          axios.post("http://localhost:5000/productupdate",{
            _id,
            name,
            price,
            rating,
            desc,
            catg,
            image,
          })
          .then(()=>{
            setName("");
            setPrice("");
            alert("success");
          })
          .catch((error)=>alert("error"));
          alert("product Updated Successfully");
    
        }
    
      }
    
    
    
  return (
    <div>
      <form onSubmit={handleSubmit}>

<div className="form">
  
    <h1 id="bb" >Update Product</h1>
    
    
<input type="text" value={name} className="aa" name="name" placeholder="Enter name of product" onChange={(e)=>{setName(e.target.value)}} />
<input type="number" value={price} className="aa" name="price" placeholder="Enter price" onChange={(e)=>{setPrice(e.target.value)}} />
<div style={{display:"flex"}}>
<label id ="ppp">Rating:</label>
<select id="kane"  onChange={(e)=>{setRating(e.target.value)}}>
  <option value="☆☆☆☆☆">5</option>
  <option value="☆☆☆☆">4</option>
  <option value="☆☆☆">3</option>
  <option value="☆☆">2</option>
  <option value="☆">1</option>
  
</select>
</div>
<textarea id="ta" name="description" value={desc} rows="5" cols="25" placeholder="Enter description of product" onChange={(e)=>{setDesc(e.target.value)}} />
<select id="kane" value={catg} onChange={(e)=>{setCatg(e.target.value)}} >
    <option value="Fashion">Fashion</option>
    <option value="Electronic">Electronic</option>
    <option value="Cars">Cars</option>
    <option value="Home & Garden">Home&Garden</option>
    <option value="Gifts">Gifts</option>
    <option value="Music">Music</option>
    <option value="Health & Beauty">Health&Beauty</option>
    <option value="Pets">Pets</option>
    <option value="Baby Toys">Baby Toys</option>
    <option value="Groceries">groceries</option>
    <option value="Books">Books</option>
</select>
<input type="file" placeholder="Choose File" onChange={(e)=>{setImage(e.target.value)}} />
<p id="koo">OR</p>
<input type="text" class="aaa" placeholder="Paste Image Link here" value={image} onChange={(e)=>{setImage(e.target.value)}} />
<div style={{display:"flex",justifyContent:"space-around",gap:"100px"}}>
<input type="submit" id="sub"/>
<input type="reset" id="sub" />
</div>
</div>
</form>
    </div>
  )
}

export default Updatepage
