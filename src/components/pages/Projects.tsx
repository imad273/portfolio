import React from 'react'
import FyloPic from '@/assets/fylo.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const Projects = [
    {
      picture: FyloPic,
      name: "Fylo",
      description: "Fylo is a landing page",
      link: "https://imad273.github.io/Fylo-Landing-Page/public/"
    },
    {
      picture: FyloPic,
      name: "Fylo",
      description: "Fylo is a landing page",
      link: "https://imad273.github.io/Fylo-Landing-Page/public/"
    },
    {
      picture: FyloPic,
      name: "Fylo",
      description: "Fylo is a landing page",
      link: "https://imad273.github.io/Fylo-Landing-Page/public/"
    }
  ]

  return (
    <section className='min-h-screen bg-gradient-to-br from-second_bg to-white'>
      <div className='container h-full'>
        <div className='py-12'>
          <h3 className='uppercase text-main font-semibold text-3xl text-center'>Projects & Experience</h3>

          <div className='my-12 grid grid-cols-3 gap-8'>
            {Projects.map(project => (
              <div className='glass p-3'>
                <Image src={project.picture} alt={project.name} />
                <div className='pt-3'>
                  <h3 className='text-2xl text-slate-800 font-semibold'>{project.name}</h3>
                  <p className='text-slate-800'>
                    {project.description}
                  </p>

                  <div className='flex justify-end pt-3 '>
                    <div className='text-slate-700 hover:text-main'>
                      <Link href={project.link} target='_blank' className='flex gap-2 items-center '>
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