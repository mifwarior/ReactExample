import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Logo from './NavBar/Logo';

const NavBar = ({loggined})=>{

  const linkStyle = "nav-link";
  return (
    <div className="nav-bar">
      <Logo/>
      <Link className={linkStyle} to="/">Home</Link>
      <Link className={linkStyle} to="/news">News</Link>
      {
        loggined?
        <Link className={linkStyle} to="/profile">Profile</Link>:
        <Link className={linkStyle} to="/login">Login</Link>
      }
    </div>
  );
}
export default NavBar;