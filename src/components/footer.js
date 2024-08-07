import React from 'react';
import '../css/footer.css'
import { social } from './data';
function Footer() {
    return (
        <>
            <section className='footer'>
                <div className='footer-div'>
                    <div className='footer-info'>
                        <h1>NITISH SHARMA</h1>
                        <span>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</span>
                    </div>
                    <div className='footer-social'>
                        <h1>Social</h1>
                        <ul>
                            {social.map((item) => (
                                <li key={item.id} className='footer-s'>
                                    <img src={item.icon} alt={`${item.id} icon`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            
                <div className='copyright'>
                    <span>© Copyright 2024 . Made by Nitish Sharama</span>
                </div>
            </section>
        </>
    );
}

export default Footer;