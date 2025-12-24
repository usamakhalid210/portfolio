import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
<>
<div className="container" id='contact' >
  <h1>CONTACT</h1>
  <div className="contact-icon" 
     data-aos="zoom-in-up"
      data-aos-duration="1000"
  >
    <a href='' target='_blank' className="item"> <FaInstagram className='icons'/> </a>
    <a href='https://www.facebook.com/' target='_blank' className="item"> <FaSquareFacebook className='icons'/></a>
    <a href='https://www.linkedin.com/in/usama-khalid-281904377/' target='_blank' className="item"><FaLinkedin className='icons'/></a>
    <a href='https://www.twitter.com/' target='_blank' className="item">  <FaXTwitter className='icons'/></a>
    <a href='https://github.com/usamakhalid210' target='_blank' className="item">  <FaGithub className='icons'/></a>
    <a href='mailto:uk702805@gmail.com' target='_blank' className="item">  <BiLogoGmail className='icons'/></a>
  </div>
</div>
</>
  )
}

export default Contact
