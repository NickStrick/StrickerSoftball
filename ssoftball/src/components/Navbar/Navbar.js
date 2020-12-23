import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <nav className={'Navbar-items'}>
                <NavLink to='/'>
                    Home
                </NavLink>
                <a className='events' >
                    Events <span>V</span>
                </a>
                <NavLink to='/lessons'>
                    Softball Lessons
                </NavLink>

                {/* <NavLink to='/bookonline'>
                    Book Online
                </NavLink> */}
                <NavLink to='/meetthecoach'>
                    Meet The Coaches
                </NavLink>
                <NavLink to='/coach2coach'>
                    Coach 2 Coach
                </NavLink>
            </nav>

        </div>
    );
}

export default Navbar;