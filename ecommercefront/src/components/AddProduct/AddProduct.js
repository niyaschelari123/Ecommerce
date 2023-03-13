import React,{useState} from 'react'
import './AddProduct.css';
import axios from "axios";
import { Link } from 'react-router-dom';


function AddProduct() {
  const[name,setName]=useState("");
  const[price,setPrice] = useState("");
  const[rating,setRating] = useState("☆☆☆☆☆");
  const[desc,setDesc]=useState("");
  const[catg,setCatg]=useState("Fashion");
  const[image,setImage]=useState("");

  


  const handleSubmit=(e)=>{
    console.log(name+price+rating+desc+catg+image);
    e.preventDefault();
    if(!name || !price || !rating || !desc || !catg || !image){
      alert("Please fill all fields")
    }else{

      axios.post("http://localhost:5000/api/post",{
        name,
        price,
        rating,
        desc,
        catg,
        image
      })
      .then(()=>{
        setName("");
        setPrice("");
        alert("success");
      })
      .catch((error)=>alert("error"));
      alert("product added successfully");

    }

  }


    return (
    <form onSubmit={handleSubmit}>

        <div className="form">
          
            <h1 id="bb" >Add Product</h1>
            <Link style={{textDecoration:"none",color:"black"}} to="/updateproduct"><h3  id="bgyo" >Update Product</h3></Link>
            
        <input type="text" className="aa" name="name" placeholder="Enter name of product" onChange={(e)=>{setName(e.target.value)}} />
        <input type="number" className="aa" name="price" placeholder="Enter price" onChange={(e)=>{setPrice(e.target.value)}} />
        <div style={{display:"flex"}}>
        <label id ="ppp">Rating:</label>
        <select id="kane" onChange={(e)=>{setRating(e.target.value)}}>
          <option value="☆☆☆☆☆">5</option>
          <option value="☆☆☆☆">4</option>
          <option value="☆☆☆">3</option>
          <option value="☆☆">2</option>
          <option value="☆">1</option>
          
        </select>
        </div>
        <textarea id="ta" name="description" rows="5" cols="25" placeholder="Enter description of product" onChange={(e)=>{setDesc(e.target.value)}} />
        <select id="kane" onChange={(e)=>{setCatg(e.target.value)}} >
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
        <input type="text" class="aaa" placeholder="Paste Image Link here" onChange={(e)=>{setImage(e.target.value)}} />
        <div style={{display:"flex",justifyContent:"space-around",gap:"100px"}}>
        <input type="submit" id="sub"/>
        <input type="reset" id="sub" />
        </div>
        </div>
    </form>


  );
}


export default AddProduct

