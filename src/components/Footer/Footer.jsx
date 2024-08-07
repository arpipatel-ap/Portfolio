import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="" /> */}
          <p>I am front-end web developer from REQ Solutions Pvt, Ltd , Ahmedabad, India</p>
          <div className="footer-top-right">
            <img src={user_icon} alt="" />
            <input type="email"  placeholder='Enter'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer