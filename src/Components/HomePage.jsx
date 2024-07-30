import React, { useState } from 'react'
import { Element } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Slide } from 'react-awesome-reveal';
import { FaWhatsapp } from "react-icons/fa";
import CV from "../MyData/Deepak_Frontend_CV.pdf"

const HomePage = () => {

  return (
    <Element name="Home">

      <div className="Homepage_container">

        <Slide direction='down' className='home_Content_Slider' >
          <div className="home_content">

            <h3 className='heading_one'>Hi I'm </h3>
            <span className='username'>Deepak Karki</span>

            <h2 className='heading_two'>And I'm a <span>FRONT END DEVELOPER</span></h2>
            <p className='short_description'>As a skilled Front-End Developer with more than 2 years of experience, I am specialized in building the client-side of web applications.My expertise includes Creating user-friendly web pages,Designing layouts and ensuring brand consistency,Developing dynamic web applications,Implementing interactive features.</p>
            <div className="social_icons">
              <a href="https://github.com/iamdeepak123" target='blank'><FaGithub /></a>
              <a href="https://www.linkedin.com/in/deepak-k-150aab135/" target='blank'><CiLinkedin /></a>
              <a href="https://www.instagram.com/iamdeepakkarki/" target='blank'><FaInstagram /></a>
              <a href="https://www.facebook.com/" target='blank'> <CiFacebook /></a>
              <a href="https://x.com/" target='blank'>  <CiTwitter /></a>
              <a href="https://wa.me/9410599517?text=Hey%20Let's%20Connect" target='blank'><FaWhatsapp /> </a>
            </div>
            <div className='CV_download'>
              <a href={CV} download={"Deepak_Frontend_CV"}>Download CV</a>
            </div>
          </div>

        </Slide>

        <Slide direction='up' className='hero_image_Slider' >
          <div className="hero_image">
            <div className="hero">
            </div>
          </div>
        </Slide>

      </div>

     




    </Element>)
}

export default HomePage