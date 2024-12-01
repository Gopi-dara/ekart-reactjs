import React from 'react'
import '../Styles/UserSignup.css'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
var Usersignup=()=> {

  let[name,setName] =useState("")
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  let[phone,setPhone]=useState("")

  let data2={name,email,password,phone}

  let navi=useNavigate()

  function Usersign(){
    axios.post('http://localhost:2005/users',data2)
    .then((res)=>{
      toast.success("User successfully loggedin")
      navi('/UserLogin')

    })
    .catch((err)=>{
      toast.danger("Invalid username or password")
    })
  }
  return (   
    
    <div className='UserBody7'>
       <div className='userloginimg7'>
        <img  className='user_img7'src="https://blog.emb.global/wp-content/uploads/2024/01/Top-AI-Tools-for-E-commerce-Product-Descriptions-1.jpg" alt="" />
       </div>
    <div className='UserLogin7'>
      <big className='big7'>Create a User Account &#128272; </big> <br /> <br /> 
      <form className='form7' action="" onSubmit={Usersign}>
      <img className='img7' src="https://th.bing.com/th?q=Kid+Avatar+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" /> <br /> <br /> <br />
        <p>&#128525;      Welcome!</p> 
        <label className="label7" htmlFor="">Enter Full Name:</label>
        <input className='input7' type="text" value={name} onChange={(g)=>{setName(g.target.value)}} placeholder='Enter Full Name'/>

        <label className='label7' htmlFor="">Email Address:</label>
        <input className='input7' type="email"value={email} onChange={(g)=>{setEmail(g.target.value)}} placeholder='Enter Mail Address' />

        <label className='label7' htmlFor="">Mobile Number:</label>
        <input className='input7' type="tel" pattern='[0-9]{10}' value={phone} onChange={(g)=>{setPhone(g.target.value)}} placeholder='Enter Mobile Number' />
          
        <label className='label7' htmlFor="">Confirm Password:</label>
        <input className='input7' type="password" value={password} onChange={(g)=>{setPassword(g.target.value)}} placeholder='Enter your Password &#128272;'/>
         <button className='btn7'>Login</button>

      </form>
      
    </div>
    </div>
  
  )
}
export default Usersignup


