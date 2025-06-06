import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/Arpi_Resume.pdf';


const Hero = () => {
  return (
    <div id ='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I am Arpi Patel, </span> Full-stack developer based in Canada.</h1>
      <p>I am excited to pursue new opportunities in Full Stack Development, leveraging my skills and experience to contribute to dynamic projects and innovative teams.</p>
      <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a>
      </div>

      </div>
      
    </div>
  )
}

export default Hero;