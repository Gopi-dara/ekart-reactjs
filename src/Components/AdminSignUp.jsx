import React from 'react'
import axios from 'axios'
import { useState } from 'react'
// import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import '../Styles/AdminSignUp.css'
import { useNavigate } from 'react-router-dom';

const AdminSignUp = () => {
  let[name,setName]=useState("")
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  let[phone,setPhone]=useState("")
  
let data={name,email,password,phone}

let navigate=useNavigate();

function addAdmin(){
   axios.post('http://localhost:2005/Admin',data)
   .then((res)=>{
      toast.success("Successfully account created!");
      navigate('/AdminLogin');
      
   })
   .catch((err)=>{
     toast.danger("Invalid details!");
   })
}


  return (
    <div className='AdminSignUp'>
      <div className="signupimg">
        <img  className='signup_img'src="https://img.freepik.com/premium-photo/two-factor-authentication-concept-illustration_1108314-57292.jpg" alt="" />
      </div>
      <form className='form3'action="" onSubmit={addAdmin}>
        <h1 className='h1'>Create User Account</h1>
      <label className='label3' htmlFor="">Name :</label>
      <input className='input3' type="text" value={name} onChange={(s)=>{setName(s.target.value)}} placeholder='Enter the Name'/>

      <label className='label3' htmlFor="">Email :</label>
      <input className='input3' type="email" value={email} onChange={(s)=>{setEmail(s.target.value)}} placeholder='Enter Email Address'/>

      <label className='label3' htmlFor="">Password :</label>
      <input className='input3'type="password" value={password} onChange={(s)=>{setPassword(s.target.value)}} placeholder='Enter Password'/>

      <label className='label3' htmlFor="">Phone :</label>
      <input className='input3' type='tel' pattern='[0-9]{10}' value={phone} onChange={(s)=>{setPhone(s.target.value)}} placeholder='Enter Phone Number'/> <br />
        
        {/* <Button className='btn btn-primary'>Login</Button> */}
        <button className='btn3'>Login</button>

      </form>
    </div>
  )
}

export default AdminSignUp
