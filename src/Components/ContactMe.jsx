import React from 'react'
import { Element } from "react-scroll";
import Fade from "react-awesome-reveal"
import { Slide } from 'react-awesome-reveal';
import { SiKakaotalk } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CgHello } from "react-icons/cg";

const ContactMe = () => {
  return (
    <Element name='ContactMe'>

      <div className='Contactpage_Container'>
        <Slide direction='right' className='Contactdetails_slider'>

          <div className="contact_details">
            <div className="contact_details_heading">
              <div className='contact_mh1'>
                <p className='contacth1_icon'><CgHello /></p>
                <h3 className='contacth1'>Get in Touch</h3>
              </div>

              <p className='contactp1'>I'm currently avaliable to take on new opportunity, so
                feel free to send me a message about anything that you
                have for me. You can contact anytime.
              </p>
            </div>

            <div className="contact_details_info">
              <div className='mail_details'>
                <p className="Mail_icon"><CiMail /></p>
                <a href="#">deepakkarki.work@gmail.com</a>
              </div>
              <div className='Call_details'>
                <p className="Call_icon"><IoMdCall /></p>
                <p>941-059-9517</p>
              </div>
              <div className='location_details'>
                <p className="location_icon"><FaLocationDot /></p>
                <a href="https://maps.app.goo.gl/o6RfhxVS1NX7GTWx6" target='blank'>Haldwani, Uttarakhand</a>
              </div>

              <div className="social_icon_details">
                <a href="https://github.com/iamdeepak123" target='blank'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/deepak-k-150aab135/" target='blank'><CiLinkedin /></a>
                <a href="https://www.instagram.com/iamdeepakkarki/" target='blank'><FaInstagram /></a>
                <a href="https://www.facebook.com/" target='blank'> <CiFacebook /></a>
                <a href="https://x.com/" target='blank'>  <CiTwitter /></a>
              </div>
            </div>

          </div>

        </Slide>



          <Slide direction='left' className='Contactform_slider'>


            <div className="contactform_location">

              <div className='location_map'>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27858.72712168858!2d79.49755991797421!3d29.21352597252394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86d1%3A0x6793e360cb3d930f!2sHaldwani%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1718694243356!5m2!1sen!2sin"
                  width="100%" height="200" style={{ border: 0 }} title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>


              <div className="Contact_form">

                <form method="POST" action="https://formspree.io/f/moqggzoy">
                  <h2 className='form_heading'>Let's <span className='form_heading_icon'><SiKakaotalk />   </span>     </h2>

                  <input type="text" placeholder='Your Name' name='Username' required />

                  <input type="text" placeholder='Your Email' name='Email' required />

                  <textarea type="text" placeholder='Your Message' rows="5" name='Message' required />
                  <button className='contactform_btn'>Send me a message</button>

                </form>
              </div>
            </div>

          </Slide>



      </div>


    </Element>)
}

export default ContactMe