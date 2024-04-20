import React from 'react'
import { MeteoconsStarFill } from "../../assets/star";
import Link from "next/link";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className="bg-gradient-to-br from-second_bg to-white">
      <div className="container flex justify-start items-center min-h-[90vh] ">
        <div className="space-y-4 h-full">
          <h3 className="text-6xl font-bold text-slate-700">Hi! I Am <br /><span>Emad Abbad <MeteoconsStarFill className="z-10 relative bottom-2 right-2 inline" /></span></h3>
          <p className="text-lg font-semibold text-slate-800">Front-End Developer, Building websites and web apps for over 3 years.</p>
          <div className="flex items-center gap-6">
            <button className="px-7 py-2.5 bg-main text-white font-bold hover:bg-main_hover duration-300">
              Hire me
            </button>

            <Link href="/" className="flex items-center gap-3 font-semibold hover:text-main duration-300">Projects <CgArrowsExpandUpRight /></Link>
          </div>

          <div className="flex items-center gap-2">
            <Link target='_blank' href={"https://www.linkedin.com/in/emad-203/"}><FaLinkedin size={20} className="text-gray-700 hover:text-main duration-300" /></Link>
            <Link target='_blank' href={"https://github.com/imad273"}><FaGithub size={20} className="text-gray-700 hover:text-main duration-300" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home