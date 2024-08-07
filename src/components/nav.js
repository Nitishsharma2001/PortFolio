import React from 'react';
import myimage from '../assets/nitish.jpg'
import '../css/nav.css'
function Navbar({ scrollToSection }) {
    return (
        <>
            <nav>
                <div className='userlogo'>
                    <div className='logo'>
                        <img src={myimage} alt="Profile" />
                        <h2>
                            NITISH SHARMA
                        </h2>
                    </div>
                </div>
                <div className='links'>
                    <ul>
                        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                        <li><button onClick={() => scrollToSection('about')}>About</button></li>
                        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;