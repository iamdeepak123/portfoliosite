import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { Link, NavLink } from 'react-router-dom'

const ProjectCard = (props) => {


    const { id,
        name,
        des,
        projectcode,
        codelink,
        lang,
        imgs, } = props


    return (

        <>

            <div className="card" key={id}>

                <div className="card_img"><img src={imgs} alt="" />
                </div>

                <div className="card_info">
                    <div className="headingpart">
                        <h4 className='project_name'>{name}</h4>
                        <span className='lang_tag'>{lang}</span>
                    </div>

                    <p className='project_description'>{des}</p>

                    <div className="card_btn">
                        <a href={projectcode} target='blank'><button>View Project</button></a>
                        <a href={codelink} target='blank'><button>View Code</button></a>

                    </div>
                </div>
            </div>

        </>

    )
}

export default ProjectCard