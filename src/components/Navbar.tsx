"use client"

import React, { useState } from 'react'
import { MdMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);

  return (
    <nav className='container flex justify-between items-center py-3 shadow mb-6'>
      <div>
        <span className='text-slate-700 font-bold text-2xl'>emad.dev</span>
      </div>

      <div className='md:hidden' onClick={() => setPhoneMenu(true)}>
        <MdMenuOpen size={28} className='text-slate-800 cursor-pointer' />
      </div>

      <div className={`${phoneMenu ? 'block' : 'hidden'} md:block absolute md:static top-0 left-0 bg-white w-full md:w-auto h-screen md:h-auto flex justify-center items-center`}>
        <div className='absolute block md:hidden top-5 right-5' onClick={() => setPhoneMenu(false)}>
          <IoCloseSharp size={28} className='cursor-pointer' />
        </div>
        <div className="flex flex-col items-center md:flex-row md:mx-1 gap-6">
          <a className="leading-5 text-slate-800 duration-300 hover:text-blue-600" href="#">Home</a>
          <a className="leading-5 text-slate-800 duration-300 hover:text-blue-600" href="#">Blog</a>
          <a className="leading-5 text-slate-800 duration-300 hover:text-blue-600" href="#">Components</a>
          <a className="leading-5 text-slate-800 duration-300 hover:text-blue-600" href="#">Courses</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar