import React from 'react'
import { Element } from "react-scroll"
import { Slide } from 'react-awesome-reveal';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa6";
import { SiJquery } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { PiBuildingOfficeBold } from "react-icons/pi";




const AboutMe = () => {
  return (
    <Element name='AboutMe'>
      <div className='AboutMe_container'>
        <Slide className='aboutme_slider' direction='right'>
          <div className="Education_details">

            <div className="education_heading">
              <h4>See My</h4>
              <h2> <IoSchoolSharp  fontSize={"20px"}/> Eductaion
              </h2>
            </div>

          </div>

        </Slide>
        <Slide direction='up' className='aboutme_slider'>
          <div className="Skills_details">

            <div className="skills_heading">
              <h4>Explore My</h4>
              <h2> <GiSkills fontSize={"20px"}/> Skills </h2>
            </div>

            <div className="skills_list">
              <div className="skillbox">
                <div className="skill_image">

                  <p className='skillimg'><FaHtml5 /> </p>
                  <p>HTML</p>


                </div>
                <div className="skill_name">Experienced</div>
              </div>
              <div className="skillbox">

                <div className="skill_image">

                  <p className='skillimg'><FaCss3Alt /> </p>
                  <p>CSS5</p>

                </div>
                <div className="skill_name">Experienced</div>
              </div>
              <div className="skillbox">
                <div className="skill_image">

                  <p className='skillimg'><AiOutlineJavaScript /> </p>
                  <p>JavaScript</p>
                </div>
                <div className="skill_name">Intermediate</div>
              </div>
              <div className="skillbox">
                <div className="skill_image">
                  <p className='skillimg'> <FaReact /> </p>
                  <p> React-JS</p>
                </div>
                <div className="skill_name">Intermediate</div>
              </div>
              <div className="skillbox">
                <div className="skill_image">
                  <p className='skillimg'> <SiJquery /></p>
                  <p> jQuery</p>
                </div>
                <div className="skill_name">Intermediate</div>
              </div>
              <div className="skillbox">
                <div className="skill_image">
                  <p className='skillimg'>  <RiFirebaseFill /> </p>
                  <p> FireStore</p>
                </div>
                <div className="skill_name">Intermediate</div>
              </div>

            </div>
          </div>
        </Slide>

        <Slide direction='left' className='aboutme_slider'>
          <div className="Experience_details">
            <div className="experience_heading">
              <h4>Explore My</h4>
              <h2><PiBuildingOfficeBold fontSize={"20px"}/> Experience</h2>
            </div>



          </div>
        </Slide>





      </div>


    </Element>)
}

export default AboutMe