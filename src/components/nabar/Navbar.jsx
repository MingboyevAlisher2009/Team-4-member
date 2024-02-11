import React from 'react';
import './navbar.css'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar backdrop-blur-lg flex justify-evenly'>
        <Link to={'/'} className=' text-3xl font-bold'>TE5M</Link >
        <div className="navs py-2">
          <NavLink to='/' className='ml-14 '>Home</NavLink>
          <NavLink to='/about' className='ml-14 '>Abaut</NavLink>
          <NavLink to={'/portfoli'} className='ml-14 '>Portfoli</NavLink>
          <NavLink to='/purchase' className='ml-14 '>Buyurtma berish</NavLink>
        </div>
    </nav>
  )
}

export default Navbar