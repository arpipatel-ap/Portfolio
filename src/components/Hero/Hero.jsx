import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I am Arpi Patel, </span> Full-stack developer based in Canada.</h1>
      <p>I am excited to pursue new opportunities in Full Stack Development, leveraging my skills and experience to contribute to dynamic projects and innovative teams.</p>
      <div className="hero-action">
      <div className="hero-connect">Connect with me</div>
      <div className="hero-resume">My Resume</div>

      </div>
      
    </div>
  )
}

export default Hero