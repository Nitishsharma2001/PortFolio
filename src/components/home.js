import React from 'react';
import '../css/home.css'
function Home({ scrollToSection }) {
    return (
        <>
            <div className='main'>
                <h1>HEY I'M NITISH SHARMA</h1>
                <span>"A motivated Front-End Developer Eager to Build Responsive and User-Friendly Websites and Web Applications."</span>
                <span><button onClick={() => scrollToSection('projects')}>Projects</button></span>
            </div>
        </>
    );
}

export default Home;