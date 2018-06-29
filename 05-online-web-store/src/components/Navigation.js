import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li className="Toolbar"><NavLink to="/">Home</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation