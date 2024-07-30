import React, { useState } from 'react'
import { Link } from "react-scroll"
import { FiAlignRight } from "react-icons/fi";
import { TbLetterD } from "react-icons/tb";

import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
 
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="navbar_container">
        <div className="nav_logo">
          {/* <div className="imgs">< TbLetterD fontSize={"50px"} />
          </div> */}
        </div>
        
        <ul className={ active ? 'menu_list' : "menu_list active" }>

          <li>
            <Link to="Home" onClick={()=> setActive(true)}> HOME</Link>
          </li>
          <li>
            <Link to="AboutMe" onClick={()=> setActive(true)}> ABOUT</Link>

          </li>
          <li>
            <Link to="Mywork" onClick={()=> setActive(true)}> PROJECTS</Link>

          </li>
          <li>
            <Link to="ContactMe" onClick={()=> setActive(true)}> CONTACT</Link>

          </li>
        </ul>
        <div className={ active ? 'menu_icons' : "menu_icons active" } >
          <FiAlignRight onClick={()=> setActive(false)} className="showicon"  style={{fontSize: "40px"}}/>
          <AiFillCloseCircle onClick={()=> setActive(true)} className= "hideicon"  style={{fontSize: "40px"}}/>
        </div>



      </div>



    </>
  )
}

export default Navbar