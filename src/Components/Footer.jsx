import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">

        <div className='footer_heading'>

          <div className="footer_icon"><FaRegCopyright fontSize="20px" /></div>

          <div className='footer_content' > {new Date().getFullYear()} Deepak Karki</div>



        </div>
      </div>

    </>
  )
}

export default Footer