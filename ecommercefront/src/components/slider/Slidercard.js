import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { useEffect, useState } from 'react'
import "./Slider.css";
import productsslider from "../slidedata/data";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginActions } from "../slice/loginSlice";
import { Link } from "react-router-dom";
function Slidercard() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
  fetch("http://localhost:5000/products")
  .then((resp)=>resp.json())
  .then((data)=>setProducts(data))
  },[])
const dispatch=useDispatch();
  const filter=products.filter((item)=>item.catg=="Electronic" && item.name.toLowerCase().includes("iphone"));

  console.log(filter);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }


  
  return (
    <>
      <Slider {...settings}>
        {productsslider.map((value, index) => {
          const {id,name,price,image,offer}=value;
          return (
            <>
              <div className='sdmain' key={index}>
                <div className='left'>
                  <h1>🅸 🅿🅷🅾🅽🅴 🅶🅰🅻🅻🅴🆁🆈</h1>
                  <h1>{value.name}</h1>
                  
                  <Link to="/iphone"><button className='btn-primary btg'>Visit Collection</button></Link><br/><br/>
                  <span id="ofer" >{value.offer}</span><br />
                  <button id="ince" onClick={()=>{
                    axios.post("http://localhost:5000/addCart",{
                    id:id,  
                    name:name,
                    price:price,
                    image:image,
                    quantity:1,
                    })
                    .then((resp)=>{dispatch(loginActions.toggle())})
                    .catch((err)=>{});
                    
                  }}>
𝓐𝓭𝓭 𝓽𝓸 𝓒𝓪𝓻𝓽</button>
                </div>
                <div className='right'>
                  <img src={value.image} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Slidercard

