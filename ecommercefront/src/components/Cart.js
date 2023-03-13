import React,{useState} from "react"
import { useEffect } from "react";
import "./cart.css"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "./slice/loginSlice";
import { Link } from "react-router-dom";



const Cart = () => {

  const history=useHistory();
 const visible=useSelector((state)=>state.login.visible);
 const dispatch=useDispatch();
 const peru=localStorage.getItem("peru");

  const [cartItems,setCartItems] = useState([]);
  const [flag,setFlag] = useState(true);
useEffect(()=>{
  fetch("http://localhost:5000/cartItems")
  .then((res)=>res.json())
  .then((dta)=>setCartItems(dta));
},[flag]);

console.log(cartItems+"carts");


const increaseQty = (id,name,image,price)=>{
 
}
 
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

  
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          

          <div className='cart-details'>
            {cartItems.length === 0 && <h1 className='no-items product'>No Items are added in the Cart</h1>}

            
            {cartItems.map((item) => {

              const {id,name,image,price,quantity}=item;

              const productQty = item.price * item.quantity

              return (
                <div className='cart-list' key={item.id}>
                  <div className='img'>
                    <img src={item.image} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3 id="titles">{item.name}</h3>
                    <h4 id="prices">
                      ${item.price}.00 * {item.quantity}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={()=>{
                        axios.post(`http://localhost:5000/removecartitem/${id}`)
                        .then(()=>alert("item removed successfully from cart"))
                        .catch((err)=>console.log(err));
                        setFlag(!flag);
                        dispatch(loginActions.toggle());
                        
                      }} >
                        <img id="closee" src="https://cdn-icons-png.flaticon.com/512/660/660252.png" />
                      </button>
                    </div>
                    
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={()=>{
                        axios.post(`http://localhost:5000/cartincrement/${id}`)
                        .then(()=>{})
                        .catch((err)=>{})
                        setFlag(!flag)
                        dispatch(loginActions.toggle());
                        
                        
                      }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png" id="pluus" />
                      </button>
                      <button className='desCart' onClick={() => {
                        axios.post(`http://localhost:5000/cartdecrement/${id}`)
                        .then(()=>{window.location.reload()})
                        .catch((err)=>{})
                        setFlag(!flag)
                        dispatch(loginActions.toggle());
                        
                      }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/753/753322.png" id="minuus" />
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
            <button id="checko" onClick={()=>{
              
              if(peru){
                
                if(cartItems.length==0){
                  alert("Cart is empty")
                }else{
                  history.push("/checkout");

                }
              }else{
                history.push("/signin");
                alert("Please signin");
              }

            }} >Proceed To Checkout</button>
            
          </div>
        </div>
        
      </section>
    </>
  )
}

export default Cart

