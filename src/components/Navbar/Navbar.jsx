import React, { useState } from 'react';
import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Arpi</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setmenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt=" " /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setmenu("about")}>About me</p></AnchorLink>{menu === "about" ? <img src={underline} alt=" " /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#timeline'><p onClick={() => setmenu("education/experience")}>Education/Experience</p></AnchorLink>{menu === "education/experience" && <img src={underline} alt=" " />}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setmenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt=" " /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setmenu("projects")}>Projects</p></AnchorLink>
          {menu === "projects" ? <img src={underline} alt=" " /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setmenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt=" " /> : <></>}</li>
      </ul>

      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar;