import React from 'react'

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

                <div className="card_img">
                <img src={imgs} alt="" />
                </div>

                <div className="card_info">
                    <div className="headingpart">    
                        <h4 className='project_name'>{name}</h4>
                        <span className='lang_tag'>{lang}</span>
                    </div>

                    <p className='project_description'>{des}</p>

                    <div className="card_btn">
                        <a href={projectcode} target='blank'><button className='button1'>Project</button></a>
                        <a href={codelink} target='blank'><button className='button2'> Code</button></a>

                    </div>
                </div>
            </div>

        </>

    )
}

export default ProjectCard