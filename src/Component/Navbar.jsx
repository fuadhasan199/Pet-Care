import React from 'react';
import { NavLink } from 'react-router';
 import logo from '../logo.jpg'
const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm p-5  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li>
         <NavLink to={'/Service'}>Service</NavLink>
        </li>
        <li> <NavLink to={'/my-profile'}>My Profile</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> <img src={logo} alt="" className='w-[80px]' /></a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal items-baseline px-1">
      <li><NavLink to={'/'} className={({isActive})=> isActive ? 'text-blue-500 font-bold underline': "" }>Home</NavLink></li>
      <li>
     
         <NavLink to={'/service'} className={({isActive})=> isActive ? 'text-blue-500 font-bold underline': "" }>Services</NavLink>
       
      </li>
    <li> <NavLink to={'/my-profile'} className={({isActive})=> isActive ? 'text-blue-500 font-bold underline': "" }>My Profile</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to={'/login'} className={'btn'}>Log In</NavLink>
  </div>
</div>
    );
};

export default Navbar;