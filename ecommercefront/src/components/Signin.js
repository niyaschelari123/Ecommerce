import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import "./Signin.css";

import { loginActions } from './slice/loginSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';



function Signin() {
  const dispatch=useDispatch();

  useEffect(()=>{
    fetch('http://localhost:5000/admin')
    .then((resp)=>resp.json())
    .then((data)=>setAdmin(data))
  },[])

  let [nameto,setNameto] = useState("");
  const [peru,setPeru] = useState("");
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [login,setLogin]=useState([]);
  const [flag,setFlag] = useState(false);
  const [admin,setAdmin]=useState([]);
useEffect(()=>{
  fetch("http://localhost:5000/logindata")
.then((resp)=>resp.json())
.then((data)=>setLogin(data))
},[])
console.log(login);

 
  console.log(userName+password);
  const submitted=(e)=>{
    dispatch(loginActions.toggle());
e.preventDefault();
const check=userName;
const final=login.filter((item)=>{
  if(item.userName==userName && item.password==password){
    return item;
  }
})


if(final.length>0){
  const peru=final[0].name;
  localStorage.setItem("peru",peru)
  setFlag(true);
  setUserName("");
setPassword("");
  
}else{
  alert("login fail");
 
}
setFlag(false);

const xy=admin.filter((item)=>item.userName==check)
console.log(xy[0]);
if(xy.length>0){
setNameto(nameto=xy[0].name);
}

/*if(check=="niyas@gmail.com"){
  dispatch(loginActions.toggle());
  
  
}*/
if(xy.length>0){
  localStorage.setItem("name",nameto);
  
  /*axios.post("http://localhost:5000/admintemp",{
    nameto,
  })
  .then((resp)=>{})
  .catch((err)=>{})*/
}

  }
  return (
    <>
    <h1 id="tt">Sign in</h1>
    <form onSubmit={submitted}>
  <div className="outer">
    <input type="text" className="aa" id="userl" placeholder="Enter userName" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
    <input type="password" className="aa" id="passl" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    <div className="bottom">
      <span id="spone">Don't have an account?
      <Link to='/signup'><span id="sptwo"> Register Now</span></Link></span>
      <button id="ok" >Login</button>
    </div>
  </div>  
  </form>
  </>





)
}

export default Signin