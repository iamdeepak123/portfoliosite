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
import { LuSchool } from "react-icons/lu";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { IoSchool } from "react-icons/io5";
import { RiHomeOfficeLine } from "react-icons/ri";






const AboutMe = () => {
  return (
    <Element name='AboutMe'>
      <div className='AboutMe_container'>
        <Slide className='aboutme_slider' direction='down'>
          <div className="Education_details">

            <div className="education_heading">
              {/* <h4>See My</h4> */}
              <h2> <IoSchool fontSize={"20px"} /> Eductaion
              </h2>
            </div>
            <div className="education_list">

              <div className="education_box">

                <div className="Education_name_image">
                  <p className='college_icon'>  <IoSchool /></p>
                </div>
                <div className="Education_name_heading">
                  <h3 className='collegename'>Dev Bhoomi Uttarakhand University, Dehradun</h3>
                  <p>Bachelor of Technology - B-Tech </p>
                  <p>Electronics and Communications Engineering</p>
                  <p>2013 - 2017 </p>
                  <p className='gradep'>Grade: B</p>
                </div>
              </div>
              <div className="education_box">

                <div className="Education_name_image">
                  <p className='college_icon'>  <LuSchool /></p>
                </div>
                <div className="Education_name_heading">
                  <h3 className='collegename'>SGRR Public School, Dehradun</h3>
                  <p>Science,PCM</p>
                  <p>2012 - 2013 </p>
                  <p className='gradep'>Grade: B</p>
                </div>
              </div>
              <div className="education_box">

                <div className="Education_name_image">
                  <p className='college_icon'>  <LuSchool /></p>
                </div>
                <div className="Education_name_heading">
                  <h3 className='collegename'>Vivekananda School, Dehradun</h3>
                  <p>High School,CBSE Board </p>
                  <p>2010 - 2011 </p>
                  <p className='gradep'>Grade: B</p>
                </div>
              </div>

            </div>
          </div>


        </Slide>
        <Slide direction='up' className='aboutme_slider2'>
          <div className="Skills_details">

            <div className="skills_heading">
              {/* <h4>Explore My</h4> */}
              <h2> <GiSkills fontSize={"20px"} /> Skills </h2>
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

        <Slide direction='down' className='aboutme_slider3'>
          <div className="Experience_details">
            <div className="experience_heading">
              {/* <h4>Explore My</h4> */}
              <h2><PiBuildingOfficeBold fontSize={"20px"} /> Experience</h2>
            </div>
            <div className="experience_list">
              <div className="experience_box">

                <div className="exp_part1">

                  <p className='exp1_icon'>
                    <RiHomeOfficeLine fontSize={"40px"} />
                  </p>

                  <div className='exp1_title'>
                    <h4 className='exp1_title_h4'>Front End Developer</h4>
                    <p className='exp1_title_h4'>Self Employed,Remote</p>
                    <p className='exp1_title_h4'>Jul 2021 - Jun 2023 · 2 yrs</p>
                  </div>

                </div>

                <div className="exp_part2">
                  <li>Developed a Responsive e-commerce platform.</li>
                  <li>Implemented product cart listing,user authentication</li>
                  <li>Designed and built a personal portfolio website.</li>
                  <li>Leveraged state management with React hooks.</li>
                </div>

              </div>

              <div className="experience_box">

                <div className="exp_part1">

                  <p className='exp1_icon'>
                    <RiHomeOfficeLine fontSize={"40px"} />
                  </p>

                  <div className='exp1_title'>
                    <h4 className='exp1_title_h4'>Front End Developer</h4>
                    <p className='exp1_title_h4'>NLB Services, Noida</p>
                    <p className='exp1_title_h4'>Jul 2019 - Jun 2021 · 1.75 yrs</p>
                  </div>

                </div>

                <div className="exp_part2">
                  <li>Integrated a real-time chat feature using Firebase.</li>
                  <li>Utilized hooks,functional components to build,UI components</li>
                  <li>Worked in an Agile environment, deliver
                  high-quality software.</li>
                  
                </div>

              </div>






            </div>


          </div>
        </Slide>





      </div>


    </Element>)
}

export default AboutMe