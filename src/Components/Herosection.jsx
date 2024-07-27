import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const Herosection = () => {
    return (
        <>
            <div className="home_content">
                <h3 className='heading_one'>Hi I'm </h3>
                <span className='username'>Deepak Karki</span>
                <h2 className='heading_two'>And I am a <span>Front End Developer</span></h2>
                <p className='short_description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et culpa enim nisi eaque veritatis fugiat unde alias velit incidunt tenetur ipsum laborum rerum, perspiciatis maxime cumque consequatur? Incidunt, optio officia.</p>
                <div className="social_icons">
                    <a href="#"><FaGithub /></a>
                    <a href="#"><CiLinkedin /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"> <CiFacebook /></a>
                    <a href="#">  <CiTwitter /></a>
                </div>
                
                <div className='CV_download'>
                    <button>Download CV</button>
                </div>
            </div>
        </>
    )
}

export default Herosection