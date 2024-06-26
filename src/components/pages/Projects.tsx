"use client"

import React from 'react'
import FyloPic from '@/assets/fylo.jpeg'
import IpAddressTracking from '@/assets/ip-address-tracking.jpeg'
import Ditch from '@/assets/Ditch.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";
import azure from "@/assets/AZURE-HOTEL.jpg";
import { motion } from 'framer-motion'

const Projects = () => {
  const Projects = [
    {
      picture: FyloPic,
      name: "Fylo",
      description: "Fylo is a landing page",
      link: "https://imad273.github.io/Fylo-Landing-Page/public/",
      technologies: [
        {
          name: "HTML",
          bgColor: "#fccccc",
          textColor: "#C30101"
        },
        {
          name: "CSS",
          bgColor: "#cbebf5",
          textColor: "#000F8E"
        },
        {
          name: "TailwindCSS",
          bgColor: "#FEF7C3",
          textColor: "#C78000"
        }
      ]
    },
    {
      picture: IpAddressTracking,
      name: "IP Address Tracker",
      description: "Web application for tracking IP addresses and know where exactly they are, through an API called ipgoelocation.",
      link: "https://imad273.github.io/ip-address-tracker/",
      technologies: [
        {
          name: "HTML",
          bgColor: "#fccccc",
          textColor: "#C30101"
        },
        {
          name: "CSS",
          bgColor: "#cbebf5",
          textColor: "#000F8E"
        },
        {
          name: "Mapbox",
          bgColor: "#FBDDED",
          textColor: "#EF6DAF"
        }
      ]
    },
    {
      picture: azure,
      name: "Azure Control panel",
      description: "Azure is an admin control panel for hotel, azure was build using react/typescript and Shadcn in the front, nodejs/mongodb in the backend",
      link: "https://azure-hotel-panel.vercel.app/",
      technologies: [
        {
          name: "React",
          bgColor: "#fccccc",
          textColor: "#C30101"
        },
        {
          name: "Nodejs",
          bgColor: "#cbebf5",
          textColor: "#000F8E"
        },
        {
          name: "mongoDB",
          bgColor: "#FEF7C3",
          textColor: "#C78000"
        }
      ]
    },
    {
      picture: Ditch,
      name: "Ditch Portfolio",
      description: "Portfolio for UI/UX designer using TailwindCSS.",
      link: "https://imad273.github.io/Ditch-Portfolio/public/",
      technologies: [
        {
          name: "HTML",
          bgColor: "#fccccc",
          textColor: "#C30101"
        },
        {
          name: "CSS",
          bgColor: "#cbebf5",
          textColor: "#000F8E"
        },
        {
          name: "TailwindCSS",
          bgColor: "#FEF7C3",
          textColor: "#C78000"
        }
      ]
    },
  ]

  return (
    <section className='min-h-screen bg-gradient-to-br from-second_bg to-white' id='projects'>
      <div className='container h-full'>
        <div className='py-12'>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className='uppercase text-main font-bold text-3xl text-center'>Projects & Experience</h3>
          </motion.div>

          <div className='my-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Projects.map(project => (
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='glass p-3 flex flex-col' key={project.name}>
                <div className='h-64'>
                  <Image src={project.picture} alt={project.name} className='h-[inherit]' />
                </div>
                <div className='flex flex-col gap-6 pt-3 h-full'>
                  <div className='flex-1'>
                    <div className='flex gap-2 mb-3 mt-1'>
                      {project.technologies.map(tech => (
                        <div key={tech.name} className='pb-0.5 px-2 rounded-full' style={{ background: tech.bgColor, color: tech.textColor }}>
                          <span className='text-xs font-semibold'>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    <h3 className='text-2xl text-slate-800 font-semibold'>{project.name}</h3>
                    <p className='text-slate-600'>
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className='flex justify-end'>
                      <Link href={project.link} target='_blank' className='flex gap-2 items-center text-slate-700 hover:text-main'>
                        <FaExternalLinkAlt /> Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects