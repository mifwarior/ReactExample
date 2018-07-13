import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props)=>{

  const linkStyle = "nav-link";
  return (
    <div className="nav-bar">
      <Link className={linkStyle} to="/">Home</Link>
      <Link className={linkStyle} to="/login">Login</Link>
      <Link className={linkStyle} to="/news">News</Link>
      <Link className={linkStyle} to="/profile">Profile</Link>
    </div>
  );
}
export default NavBar;