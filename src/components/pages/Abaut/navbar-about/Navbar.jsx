import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar({props, link}) {
    return (
        <nav className='about-navbar backdrop-blur-lg flex mx-auto my-6 rounded-full border-solid border-2'>
            <NavLink to={'/'} className='text-white text-xl font-bold'>TE5M</NavLink>
            <div className="nav absolute right-9">
                <NavLink to={link} className='text-white text-lg'>{props}</NavLink>
            </div>
        </nav>
    )
}

export default Navbar