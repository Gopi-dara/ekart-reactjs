import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import '../Styles/UserLogin.css'
var UserLogin=()=> {

let[username,setUsername]=useState("")
console.log(username);

let[password,setPassword]=useState("")
console.log(password);

let navigate=useNavigate()

function CreateUser(){
  let val=user.filter((y)=>
    {return y.name===username && y.password===password})
  if(val.length>0){
    toast.success("User Login Succeefull")
    navigate('/UserHomepage')
  }
  else{
    toast.danger("User Login Failed")
  }
}

let[user,setUser]=useState([])
useEffect(()=>{
  async function fetchusers(){
    let data1=await fetch('http://localhost:2005/users')
    let res=await data1.json()
    setUser(res)
  }
  fetchusers()
},[]);
console.log(user)




  return (
    
    <div className='UserBody'>
       <div className='userloginimg'>
        <img  className='user_img'src="https://blog.emb.global/wp-content/uploads/2024/01/Top-AI-Tools-for-E-commerce-Product-Descriptions-1.jpg" alt="" />
       </div>
    <div className='UserLogin'>
      <big className='big2'>User Login &#128272; </big> <br /> <br /> 
      <form className='form2' action="">
      <img className='img2' src="https://th.bing.com/th?q=Kid+Avatar+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" /> <br /> <br /> <br />
        <p>&#128525;      Welcome!</p> 
        <label className="label2" htmlFor="">username:</label>
        <input className='input2' type="text" value={username} onChange={(g)=>{setUsername(g.target.value)}} placeholder='Enter Full Name'/>  
         
        <label className='label2' htmlFor="">password:</label>
        <input className='input2' type="password" value={password} onChange={(g)=>{setPassword(g.target.value)}} placeholder='Enter your Password &#128272;'/>
         <button className='btn2' onClick={CreateUser}>Signup</button>
         <span className='spann'>Click here to <Link to='/Usersignup'>Signup</Link></span>

      </form>
      
    </div>
    </div>
  
  )
}
export default UserLogin


