"use client"

import React, { useState } from 'react'
import { MdMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);

  return (
    <nav className='container flex justify-between items-center py-3'>
      <div>
        <p className='text-slate-700 font-bold text-2xl'>
          emad<span className='text-main'>.</span>
        </p>
      </div>

      <div className='md:hidden' onClick={() => setPhoneMenu(true)}>
        <MdMenuOpen size={28} className='text-slate-800 cursor-pointer' />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${phoneMenu ? 'block' : 'hidden'} md:block fixed md:static top-0 left-0 bg-white w-full md:w-auto h-screen md:h-auto flex justify-center items-center z-50`}>
        <div className='absolute block md:hidden top-5 right-5' onClick={() => setPhoneMenu(false)}>
          <IoCloseSharp size={28} className='cursor-pointer' />
        </div>
        <div className="flex flex-col items-center md:flex-row md:mx-1 gap-6">
          <a className="font-semibold text-slate-800 duration-300 hover:text-main" href="#home" onClick={() => setPhoneMenu(false)}>Home</a>
          <a className="font-semibold text-slate-800 duration-300 hover:text-main" href="#about" onClick={() => setPhoneMenu(false)}>About</a>
          <a className="font-semibold text-slate-800 duration-300 hover:text-main" href="#projects" onClick={() => setPhoneMenu(false)}>Projects</a>
          <a className="font-semibold text-slate-800 duration-300 hover:text-main" href="#contact" onClick={() => setPhoneMenu(false)}>Contact</a>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar