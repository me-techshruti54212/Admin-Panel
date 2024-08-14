import React from 'react'
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div className="w-full bg-[#DBE3FF] p-2 flex justify-between items-center">
        <img src={logo} alt="MEETX" className='h-8'/>
        <Link to="/" className="bg-blue-500 flex items-center p-2 rounded-lg text-white">Log Out</Link>
    </div>
    </>
  )
}

export default NavBar