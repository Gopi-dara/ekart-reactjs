import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminViewItems from './AdminViewItems'
import { Route,Routes } from 'react-router-dom'
import Footer from './Footer' 
import '../Styles/AdminHomepage.css'
// import AdminDashBoard from './AdminDashBoard'
import AdminAddProducts from './AdminAddProducts'
import UpdateProducts from './UpdateProducts'


const AdminHomePage = () => {
  return (
    <div className='AdminHomePage'>
      
       <AdminNavbar/>

       <Routes>
        <Route path="/AdminAddProducts" element={<AdminAddProducts/>}></Route>
        <Route path="/AdminViewItems" element={<AdminViewItems/>}></Route>
        <Route path='/UpdateProducts/:id' element={<UpdateProducts/>}></Route>

       </Routes>
       <Footer/>
       
       
    </div>
  )
}

export default AdminHomePage
