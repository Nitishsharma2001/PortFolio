import React from 'react';
import '../css/sidebar.css'
import {social} from './data';
function Sidebar() {
    return (
        <>
            <div className='main-sidebar'>
                <div className='sidebar'>
                    <ul>
                        {social.map((item) => (
                            <li key={item.id} className='social'>
                                <img src={item.icon} alt={`${item.id} icon`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;