import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar backdrop-blur-lg flex justify-evenly'>
        <h1 className='text-white text-3xl font-bold'>TE5M</h1>
        <div className="navs py-2">
          <NavLink to='/' className='ml-14 text-white'>Home</NavLink>
          <NavLink to='/about' className='ml-14 text-white'>Abaut</NavLink>
          <NavLink to={'/portfoli'} className='ml-14 text-white'>Portfoli</NavLink>
          <NavLink to='/purchase' className='ml-14 text-white'>Buyurtma berish</NavLink>
        </div>
    </nav>
  )
}

export default Navbar