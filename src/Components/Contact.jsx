import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className='container contact' data-aos="zoom-in"
              data-aos-duration="1000" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icons">
          <a href='#' className="items">
            <FaSquareInstagram className='icons'/>
          </a>
          <a href='#' className="items">
            <FaFacebook className='icons'/>
          </a>
          <a href='#' className="items">
            <FaLinkedin className='icons'/>
          </a>
          <a href='#' className="items">
            <FaSquareXTwitter className='icons'/>
          </a>
          <a href='https://github.com/Deepak2427' target='_blank' className="items">
            <SiGithub className='icons'/>
          </a>
          <a href='mailto:dps2782002@gmail.com' className="items">
            <SiGmail className='icons'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
