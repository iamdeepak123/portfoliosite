import React from 'react'
import { Element } from "react-scroll"
import data from "../MyData/Data"
import imgs from "../images/Chat_Image.png"
const MyWork = () => {

  console.log(data[0].image);

  
    return (
    <>

      <Element name='Mywork'>


        <div className='mywork_container'>MyWork 
          <img src={imgs} alt="" />
          
           </div>


      </Element>


    </>

  )
}

export default MyWork