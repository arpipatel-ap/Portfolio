import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>With a diploma in full stack web development from Lighthouse Labs and over two years of experience in frontend web development.</p>
            <p>I am passionate about creating efficient, scalable, and user-centric solutions. I thrive in collaborative environments and am always eager to tackle new challenges and learn new technologies.</p>
          </div>
          <div className="about-skills">
            <div className="about skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about skill"><p>Javascript</p><hr style={{ width: "90%" }} /></div>
            <div className="about skill"><p>Node js</p><hr style={{ width: "78%" }} /></div>
            <div className="about skill"><p>Express</p><hr style={{ width: "80%" }} /></div>
            <div className="about skill"><p>PostgresSql</p><hr style={{ width: "80%" }} /></div>
            <div className="about skill"><p>React</p><hr style={{ width: "90%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERINCE IN INDUSTRY </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
       
      </div>
    </div>
  )
}

export default About