import React from 'react'
import { Element } from "react-scroll"
import data from "../MyData/Data"
import { Bounce, Slide } from 'react-awesome-reveal'
import ProjectCard from "./ProjectCard"

const MyWork = () => {



 const featureddata = data.filter((elem)=>{return elem.featured ===true});

  return (
    <>

      <Element name='Mywork'>

        <div className="mywork_container">
          <div className="mywork_heading">
            <Slide cascade direction='down'>
              <p> CHECK OUT</p>
              
            </Slide>
            <Slide cascade direction='up'>
              <p>MY RECENT PROJECTS</p>
            </Slide>
          </div>

          <div className="cardslist">

            <Bounce>
            {
            featureddata.map((curElem)=>{
              return <ProjectCard
               id = {curElem.id} 
               name = {curElem.name}
               des= {curElem.Description}
               projectcode = {curElem.projectlink}
               codelink = {curElem.codelink}
               lang = {curElem.language}  
               imgs = {curElem.image}           
               
               />
            })
           }

            </Bounce>
          






          </div>


        </div>


      </Element>


    </>

  )
}

export default MyWork