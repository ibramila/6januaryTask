import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./../assets/scss/_navbar.scss"
function NavbarSide() {
    const activeNavbar = {
        fontSize: 25,
        fontWeight: 900
    }
    return (
        <>
            <nav>
                <div className='header'>
                    <div className='header_leftSide'>
                        <span><NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/">Shortly</NavLink></span>
                        <ul className='nav'>
                            <li><NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/features">Features</NavLink></li>
                            <li><NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/pricing">Pricing</NavLink></li>
                            <li><NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/resources">Resources</NavLink></li>
                        </ul>
                    </div>
                    <ul className='header_rightSide'>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavbarSide