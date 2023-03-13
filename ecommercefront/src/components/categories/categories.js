import React from 'react'
import { Link } from 'react-router-dom';
import "./cat.css";
function Categories({sshow,setSshow}) {
  const peru=localStorage.getItem("peru");

    const data = [
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/3050/3050253.png",
          cateName: "Fashion",
        },
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/8897/8897721.png",
          cateName: "Electronic",
        },
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
          cateName: "Cars",
        },
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/4664/4664316.png",
          cateName: "Home & Garden",
        },
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/837/837891.png",
          cateName: "Gifts",
        },
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/3083/3083417.png",
          cateName: "Music",
        },
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/3901/3901586.png",
          cateName: "Health & Beauty",
        },
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/3460/3460473.png",
          cateName: "Pets",
        },
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/3082/3082060.png",
          cateName: "Baby Toys",
        },
        {
          cateImg: "https://cdn-icons-png.flaticon.com/512/3514/3514211.png",
          cateName: "Groceries",
        },
        {
          cateImg: "https://cutt.ly/dMEooPP",
          cateName: "Books",
        },
      ]
  return (
    <div>
      <div className={`${sshow?"categoryy":"category"}`}>
        <h2 style={{fontSize:"28px",color:"red",borderBottom:"1px solid black"}} >🅒🅐🅣🅔🅖🅞🅡🅘🅔🅢</h2>
        <span onClick={()=>{setSshow(!sshow)}} ><img id="catin" src="https://cdn-icons-png.flaticon.com/512/463/463612.png"/></span>
        {data.map((value, index) => {
          const x=value.catName;
          return (
            <Link to={`/products/${value.cateName}`} style={{ textDecoration: 'none' }} >
            <div className='boxed' key={index}>
              
              <img src={value.cateImg} alt='' />
              <span id="hov" >{value.cateName}</span>
              
            </div>
            </Link>
          )
        })}
        <hr/>
        {peru?<Link style={{textDecoration:"none"}} to="/orders"><h5 id="myorders" >My Orders</h5></Link>:""}
      </div>
    </div>
  )
}

export default Categories
