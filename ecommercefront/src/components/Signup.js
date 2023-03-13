import axios from 'axios';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css";

const instate={
    name:"",
    userName:"",
    password:"",
}

function Signup() {

    const [state,setState] = useState(instate);
    const {name,userName,password}=state;

    const inchange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setState({...state,[name]:value});

    }

    const clicked=(e)=>{
      const x=[];
      const y=JSON.stringify(x);
      localStorage.setItem(name,y);
        e.preventDefault();

        axios.post("http://localhost:5000/signupdata",{
            name,
            userName,
            password,
        })
        .then((resp)=>{})
        .catch((err)=>console.log(err))
        setState({name:"",userName:"",password:""});
        alert("Registered successfully");
    }

   
  return (
    <>
    <h1 id="ttt">Sign up</h1>
    <form onSubmit={clicked}>
  <div className="outerr">
    <input type="text" value={name} name="name" className="aa" placeholder="Enter your name" onChange={inchange} />
    <input type="text" name="userName" value={userName} className="aa" id="userl" placeholder="Enter userName" onChange={inchange} />
    <input type="password" name="password" value={password} className="aa" id="passl" placeholder="Enter password" onChange={inchange} />
    <div className="bottomm">
      <span id="sponee">Already have an account?<Link to='/signin'><span id="sptwoo"> Login Now</span></Link></span>
      <button id="okk" >Signup</button>
    </div>
  </div> 
  </form> 
  </>





)
}

export default Signup