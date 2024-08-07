import React from 'react';
import '../css/about.css'
function About() {
    return (
        <>
            <section className='about-section'>
                <div className='about'>
                    <h1>ABOUT ME</h1>
                    <span>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
                </div>
                <div className='about-div'>
                    <div className='about-info'>
                        <h1>Get to know me!</h1>
                        <span>
                            I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming

                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </span>
                        <span className='btn'><button>Contact</button></span>
                    </div>
                    <div className='about-skills'>
                        <h1>My Skills</h1>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                            <li>MongoDb</li>
                            <li>RESPONSIVE DESIGN</li>
                            <li>Operating System</li>
                            <li>Window Diagnostic</li>
                            <li>C/C++</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;