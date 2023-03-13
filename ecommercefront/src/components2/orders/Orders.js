import axios from 'axios';
import e from 'cors';
import React, { useEffect, useState } from 'react'
import "./Orders.css"
function Orders() {

    const [orders,setOrders]=useState([]);
    const[cancel,setCancel] = useState("Cancel Order");
    const [flag,setFlag] = useState(false);
    const [myorders,setMyorders]=useState([]);
    const [peru,setPeru] = useState("");

   
    useEffect(()=>{
        fetch("http://localhost:5000/odItems")
        .then((resp)=>resp.json())
        .then((data)=>setOrders(data));

        const peru=localStorage.getItem("peru");
        setPeru(peru);
        const x=localStorage.getItem(peru);
        const y=JSON.parse(x);
        setMyorders(y);

        

    },[flag])
    

    const inputcancel = (e)=>{
        if(window.confirm("Are you sure you want to cancel the order")==true){
            setCancel("Cancelled");
            
            
        }

    }
  return (
    <div className="odmain" >
        <h1 style={{textAlign:"center",marginBottom:"50px"}}>{orders.length>0?"Your Orders":"You haven't ordered anything"}</h1>
        {myorders.map((item,index)=>{
            
            const cancel=item.cancel;
            const id=item._id;
            const name=item.name;
            

           
            
            const cancelvalue=localStorage.getItem(id);
            return(
                <div className="started">
                    {item.cancel=="Cancelled"?<img  id="closeod" src="https://cdn-icons-png.flaticon.com/512/4034/4034637.png" onClick={()=>{
                        const uv= myorders.filter((item,inde)=>inde!=index);
                        const uw=JSON.stringify(uv);
                        localStorage.setItem(peru,uw);
                        setFlag(!flag);
                        console.log(uv);

                        axios.post(`http://localhost:5000/removeorder/${id}`,{name:name})
                        .then((resp)=>{})
                        .catch((err)=>{})
                    }} />:""}
                    <div className="imgr">
                        <img src={item.image}/>
                        <h6>{item.name}</h6>
                        <p>Qunatity x {item.quantity}</p>
                        <input id={item.id} type="button"  className="nayu" value={item.cancel} onClick={(e)=>{
                             if(window.confirm("Are you sure you want to cancel the order")==true){
                                
                                 myorders[index].cancel="Cancelled";
                                 console.log(myorders);
                                 const bt=document.getElementById(item.id);
                                 bt.disabled=true;
                               const u=JSON.stringify(myorders);
                                localStorage.setItem(peru,u);
                                   setFlag(!flag);
                                   
                            }

                        }} />
                    </div>
                    <h6 id="mice" >{item.cancel=="Cancelled"?"":`Arrive in ${item.ddate} days`}</h6>
                </div>
            )
        })}
      
    </div>
  )
}

export default Orders
