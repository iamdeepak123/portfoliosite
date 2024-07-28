import React from 'react'
import { Element } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Slide } from 'react-awesome-reveal';


const HomePage = () => {
  return (
    <Element name="Home">

      <div className='Homepage_container'>

        <Slide direction='up' className='home_Content_Slider' >
          <div className="home_content">
            <h3 className='heading_one'>Hi I'm </h3>
            <span className='username'>Deepak Karki</span>

            <h2 className='heading_two'>And I am a <span>Front End Developer</span></h2>
            <p className='short_description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et culpa enim nisi eaque veritatis fugiat unde alias velit incidunt tenetur ipsum laborum rerum, perspiciatis maxime cumque consequatur? Incidunt, optio officia.</p>
            <div className="social_icons">
              <a href="https://github.com/iamdeepak123" target='blank'><FaGithub /></a>
              <a href="https://www.linkedin.com/in/deepak-k-150aab135/" target='blank'><CiLinkedin /></a>
              <a href="https://www.instagram.com/iamdeepakkarki/" target='blank'><FaInstagram /></a>
              <a href="https://www.facebook.com/" target='blank'> <CiFacebook /></a>
              <a href="https://x.com/" target='blank'>  <CiTwitter /></a>
            </div>
            <div className='CV_download'>
              <button >Download CV</button>
            </div>
          </div>
        </Slide>



        <Slide direction='down' className='hero_image_Slider' >
          <div className="hero_image">
            <div className="hero">

            </div>
          </div>
        </Slide>






      </div>





    </Element>)
}

export default HomePage