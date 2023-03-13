import React,{useEffect,useState} from 'react'
import Product from './Product';
import axios from "axios";
import "./Home.css";
import Footer from "./footer/Footer";
import Categories from './categories/categories';
import Slider from 'react-slick';
import Slidercard from './slider/Slidercard';
import Deals from './deals/Deals';
import Trending from './trending/Trending';
import Supercoin from './Supercoin/Supercoin';
import Suggested from './suggested/Suggested';
import Dealsod from '../components2/Dod';
import Tops from '../components2/tops/Tops';
import Adv from '../components2/advertisement/Adv';


function Home() {
  const [meals,setMeals] = useState([]);
  const [sshow,setSshow]=useState(false);
  
 useEffect(()=>{
 fetch("http://localhost:5000/products")
 .then((resp)=>resp.json())
 .then((data)=>setMeals(data))
 },[])

console.log(meals);

  

  
  return (
    <div className="homain">
      <span onClick={()=>{setSshow(!sshow)}}><img title="Sidebar"  className="sideb" id="sideb" src="https://cdn-icons-png.flaticon.com/512/8206/8206727.png"/></span>
      <Categories sshow={sshow} setSshow={setSshow} />
      
      <Slidercard/>
      <div className="fle">
      <Deals/>
      </div>
      <Trending/>
      <hr/>
      <Supercoin/>
      <hr/>
      <Suggested/>
      <Dealsod/>
      <hr/>
      <Tops/>
      <Adv/>
      <Footer />
     
    </div>
  )
}

export default Home
