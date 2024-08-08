import React from 'react';
import '../css/project.css'
import { about } from '../components/data.js'
function Projects() {
    return (
        <>
            <section className='project'>
                <div className='project-heading'>
                    <h1>PROJECTS</h1>
                    <span>Here you will find some of the personal and clients projects that I created with each project containing its own case study</span>
                </div>
                {about.map((item) => (
                    <div className='project-div'>
                        <div><img src={item.url}></img></div>
                        <div><h1>{item.title}</h1>
                            <span className='info'>{item.des}</span>
                            <span className='btn'><button><a href={item.link} target='_blank'>Link</a></button></span>
                        </div>
                    </div>
                ))}

            </section>
        </>
    );
}

export default Projects;
