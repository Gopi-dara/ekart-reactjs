import React, { useEffect,useState } from 'react'
import '../Styles/AdminLogin.css'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
 var AdminLogin=()=> {

let[Username,setUsername]=useState("");
console.log(Username);

let[password,setPassword]=useState("");
console.log(password);

let navigate=useNavigate();


function login(){
   let val=admin.filter((x)=>
  {return x.name===Username && x.password===password})
  if(val.length>0){
    toast.success("Login Successfully")
    navigate('/AdminHomePage')

  }
  else{
    toast.danger("Invalid username or password")
  }
  
}

let[admin,setAdmin] = useState([])
useEffect(()=>{
async function fetchAdmin(){
    let data=await fetch('http://localhost:2005/Admin')
    let res=await data.json();
    setAdmin(res)
}
fetchAdmin()
 },[]);
console.log(admin)

  return (
    <div id='AdminBody'>
      
    <div className='AdminLogin'>
    <big className='big1'>&#128073;Welcome to AdminLogin &#128525;</big> <br /><br />
      <form className='form1' action="">
        <img className='img1' src="https://www.bing.com/th/id/OIP.wQFQco1izbZGsWcSyy9aUQHaHa?w=191&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
           <label className='label1' htmlFor="">Username:</label> <br />
           <input className='input1' type="text" value={Username} onChange={(v)=>{setUsername(v.target.value)}} placeholder='Enter Full Name'/> <br /><br /> <br />

           <label className='label1' htmlFor="">Password:</label> <br />
           <input className='input1' type="password" value={password} onChange={(v)=>{setPassword(v.target.value)}} placeholder='Enter your password' /> <br /><br /> <br />
            <button className='btn1' onClick={login}> Login </button> <br /> <br />
            <span className='span1'><Link to='/AdminSignUp'>Create New Account</Link></span>
             
      </form>
    </div>
    </div>
  )
}
export default AdminLogin
