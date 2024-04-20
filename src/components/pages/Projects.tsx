import React from 'react'
import FyloPic from '@/assets/fylo.jpeg'
import IpAddressTracking from '@/assets/ip-address-tracking.jpeg'
import Ditch from '@/assets/Ditch.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";

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
    }
  ]

  return (
    <section className='min-h-screen bg-gradient-to-br from-second_bg to-white'>
      <div className='container h-full'>
        <div className='py-12'>
          <h3 className='uppercase text-main font-semibold text-3xl text-center'>Projects & Experience</h3>

          <div className='my-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Projects.map(project => (
              <div className='glass p-3 flex flex-col'>
                <Image src={project.picture} alt={project.name} />
                <div className='flex flex-col gap-6 pt-3 h-full'>
                  <div className='flex-1'>
                    <div className='flex gap-2 mb-3 mt-1'>
                      {project.technologies.map(tech => (
                        <div className='pb-0.5 px-2 rounded-full' style={{ background: tech.bgColor, color: tech.textColor }}>
                          <span className='text-xs font-semibold'>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    <h3 className='text-2xl text-slate-800 font-semibold'>{project.name}</h3>
                    <p className='text-slate-800'>
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className='flex justify-end'>
                      <Link href={project.link} target='_blank' className='flex gap-2 items-center text-slate-700 hover:text-main'>
                        <FaExternalLinkAlt /> View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects