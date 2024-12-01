import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/UserNavbar.css'
import UserDropdown from './UserDropdown'
const UserNavbar = () => {
  return (
    <div className='usernav'>
        <h1>EKart</h1>
        <Link to='/UserHomepage/UserViewItems'>ViewItems</Link>

        <div className='accounts'>
          <UserDropdown/>
        </div>
    </div>
        
  );
}

export default UserNavbar;
