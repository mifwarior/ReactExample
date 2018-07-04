import React from 'react';
import {Router, Route,Link} from 'react-router-dom';

const NavBar = (props)=>{

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/news">News</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}
export default NavBar;