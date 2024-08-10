import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6ce67d92-0ba8-4ff3-9232-d4ba7086f181");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div id ='contact'className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk </h1>
          <p>I am currently avalible to take new opportunities, so feel free to connect with me </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>arpipatel96@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>226-698-4904</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Kitchener, Ontario</p>
            </div>
            <div className="contact-detail_icon">
            <a href='https://www.linkedin.com/in/arpipatel-ap/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn />
              </a>
              <a href='https://github.com/arpipatel-ap' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <form  onSubmit ={onSubmit}className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name ='email' />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows ="8" placeholder='Enter your message '></textarea>
          <button type= 'submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;