import React from 'react';
import '../css/about.css'
function About() {
    const handleClick = () => {
        window.location.href = 'mailto:nitishsharma7528008097@gmail.com';
    };
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
                            "I'm a Front-End Focused Web Developer, passionate about building and managing the front end of websites and web applications that contribute to the overall success of the product. As a fresher with a solid foundation in both software and hardware, I enjoy sharing what I’ve learned in web development to help others in the dev community. You can explore my projects on GitHub and connect with me on LinkedIn to stay updated with useful content related to web development and programming. I'm open to job opportunities where I can contribute, learn, and grow. If you have an opportunity that aligns with my skills and interests, feel free to reach out!"
                        </span>
                        <span className='btn'><button onClick={handleClick}>Contact</button></span>
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