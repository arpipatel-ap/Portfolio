import React from 'react';
import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Arpi</h1>
        <img src={theme_pattern} alt="" />
      </div>
    <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    <div className="nav-connect">connect with me</div>
    </div>
  )
}

export default Navbar;