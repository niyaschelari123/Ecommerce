import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams,useHistory } from 'react-router-dom';
import { loginActions } from '../slice/loginSlice';
import "./profile.css";
function Profile() {
    useEffect(()=>{
   fetch("http://localhost:5000/admin")
   .then((resp)=>resp.json())
   .then((data)=>setAdmin(data));
    },[])
    const dispatch=useDispatch();
    const history=useHistory();
    const {name} = useParams();
    const [admin,setAdmin] = useState([]);

    const isdata=admin.filter((item)=>item.name==name);

  return (
    <div className="wrapper">
    <div className="profile">
        <div className="overlay">
            <div className="about d-flex flex-column">
                <h4>{name}</h4> {isdata.length>0?<span>Admin</span>:""}
            </div>
            <ul className="social-icons">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-linkedin"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-instagram"></i></li>
            </ul>
            
        </div>
        <button id="okay" onClick={()=>{
            localStorage.removeItem("peru");
            localStorage.removeItem("name");
            dispatch(loginActions.toggle());
            history.push("/");
        }}>Logout</button>
    </div>
</div>
  )
}

export default Profile
