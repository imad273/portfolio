import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-second_bg to-white">
      <div className="container grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-0 w-full py-6">
        <div>
          <span className='text-slate-700 font-bold text-2xl'>emad<span className='text-main'>.</span>dev</span>
        </div>

        <div className='flex md:justify-center'>
          <p className="text-sm text-slate-700">© Copyright 2024. All Rights Reserved.</p>
        </div>

        <div className="flex md:justify-end gap-3">
          <a target='_blank' href="https://www.linkedin.com/in/emad-203/" className="text-slate-500 hover:text-slate-700 transition-colors duration-300" aria-label="Facebook">
            <FaLinkedinIn />
          </a>

          <a target='_blank' href="https://github.com/imad273" className="text-slate-500 hover:text-slate-700 transition-colors duration-300" aria-label="Github">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer