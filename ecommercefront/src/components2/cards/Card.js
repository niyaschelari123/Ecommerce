import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./card.css";
function Card() {
  const [orderitems,setOrderitems]=useState([]);
  const [peru,setPeru] = useState("");
  useEffect(()=>{
    const peru=localStorage.getItem("peru");
    setPeru(peru);
    const x=localStorage.getItem(peru);
    const y=JSON.parse(x);
    setOrderitems(y);

  },[])
  const history=useHistory();
  const [otpshow,setotpshow] = useState(false);
  const [otp,setOtp]=useState("");

  const myform=()=>{
    history.push("/otp");
  }
  return (
   
    <div className="padding">
      <form onSubmit={myform} >
<div className="row">
<div className="col-sm-6">
<div className="card">
<div className="card-header">
<strong>Credit/Debit Card</strong>
<small style={{marginLeft:"30px"}} >enter your card details</small>
</div>
<div className="card-body">
<div className="row">
<div className="col-sm-12">
<div className="form-group">
    

    
<label for="name">Name</label>
<input className="form-control" id="name" type="text" placeholder="Enter your name" required/>
</div>
</div>
</div>

<div className="row">
<div className="col-sm-12">
<div className="form-group">
<label for="ccnumber">Credit Card Number</label>


<div className="input-group">
<input className="form-control" type="number" placeholder="0000 0000 0000 0000" autocomplete="off" required  />
<div className="input-group-append">
<span className="input-group-text">
<img src="https://cdn-icons-png.flaticon.com/512/147/147258.png"/>
</span>
</div>
</div> 
</div>
</div>
</div>

<div className="row">
<div className="form-group col-sm-4">
<label for="ccmonth">Month</label>
<select className="form-control" id="ccmonth">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
</select>
</div>
<div className="form-group col-sm-4">
<label for="ccyear">Year</label>
<select className="form-control" id="ccyear">
<option>2025</option>
<option>2026</option>
<option>2027</option>
<option>2028</option>
<option>2029</option>
<option>2030</option>
<option>2031</option>
<option>2032</option>
<option>2033</option>
<option>2034</option>
<option>2035</option>
<option>2036</option>
</select>
</div>
<div className="col-sm-4">
<div className="form-group">
<label for="cvv">CVV/CVC</label>
<input className="form-control" id="cvv" type="number" placeholder="123" required />
</div>
</div>
</div>

</div>
<div className="card-footer">
<button className="btn btn-sm btn-success float-right" type="submit">
<i className="mdi mdi-gamepad-circle"></i> Continue</button>
<input type="reset" value="reset" className="btn btn-sm btn-danger" />

</div>
</div>
</div>
</div>
</form>

</div>
  )
}

export default Card
