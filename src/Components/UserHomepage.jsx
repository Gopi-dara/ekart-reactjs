import React from 'react';
import UserNavbar from './UserNavbar';
import UserViewItems from './UserViewItems';
import { Routes,Route } from 'react-router-dom';
const UserHomepage = () => {
  return (
    <div className='UserHomepage'>
      <UserNavbar/>
      <Routes>
        <Route path="/UserViewItems" element={<UserViewItems/>}></Route>
      </Routes>
    </div>
  );
}

export default UserHomepage;
