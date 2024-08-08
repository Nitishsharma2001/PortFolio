import React from 'react';
import '../css/sidebar.css'
import { social } from './data';
function Sidebar() {
    return (
        <>
            <div className='main-sidebar'>
                <div className='sidebar'>
                    <ul>
                        {social.map((item) => (
                            <a href={item.url} target="_blank">
                                <li key={item.id} className='social'>
                                    <img src={item.icon} alt={`${item.id} icon`} />
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;