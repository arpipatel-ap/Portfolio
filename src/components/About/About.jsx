import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
const About = () => {
  return (
    <div id ='about'className='about'>
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
            <div className="about-skill"><p>Languages: </p><span>JavaScript, TypeScript, Ruby, Python, HTML, CSS, SQL, GraphQL </span></div>
            <div className="about-skill"><p>Frameworks:</p><span>NodeJS, React, Redux, Next.js, Express, jQuery, Ajax, AngularJS, Rails, Vue.js</span></div>
            <div className="about-skill"><p>Libraries:</p><span>Bootstrap, Axios, Stripe, Tailwind, Sanity, Storybook, Babel, Webpack</span></div>
            <div className="about-skill"><p>Systems & Databases:</p><span>PostgreSQL, MySQL, MongoDB, Git</span></div>
            <div className="about-skill"><p>Testing: </p><span>Jest, Mocha, Chai, Storybook, Cypress, RSpec</span></div>
            <div className="about-skill"><p>Cloud Technologies & IDEs:</p><span>AZURE, VS Code, Visual Studio, Figma</span></div>
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
        
       
      </div>
    </div>
  )
}

export default About