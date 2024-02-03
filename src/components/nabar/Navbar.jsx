import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar backdrop-blur-lg flex justify-evenly'>
        <h1 className='text-white text-xl font-bold'>Te5m</h1>
        <div className="navs ">
          <NavLink className='ml-14 text-white'>Home</NavLink>
          <NavLink className='ml-14 text-white'>Abaut</NavLink>
          <NavLink className='ml-14 text-white'>Portfoli</NavLink>
          <NavLink className='ml-14 text-white'>Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar