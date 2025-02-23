"use client"

import React from 'react'
import { motion } from 'framer-motion'

const SocialProf = () => {
  return (
    <div className='h-full md:h-[30vh] bg-slate-800'>
      <div className="container grid md:grid-cols-3 gap-8 md:gap-0 text-white h-full py-6 md:py-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
          whileInView={{ opacity: 1, scale: 1 }} // Pop up to full size
          transition={{
            type: 'spring', // Use spring for a bouncy effect
            stiffness: 100, // Adjust stiffness for more/less bounce
            damping: 10, // Adjust damping for more/less bounce
            duration: 0.5, // Duration of the animation
          }}
          className='flex flex-col justify-center items-center h-full'>
          <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
            +4
          </h3>
          <p>
            Years Working Experience
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
          whileInView={{ opacity: 1, scale: 1 }} // Pop up to full size
          transition={{
            type: 'spring', // Use spring for a bouncy effect
            stiffness: 100, // Adjust stiffness for more/less bounce
            damping: 10, // Adjust damping for more/less bounce
            duration: 0.5, // Duration of the animation
          }} className='flex flex-col justify-center items-center'>
          <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
            +10
          </h3>
          <p>
            Project Done
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
          whileInView={{ opacity: 1, scale: 1 }} // Pop up to full size
          transition={{
            type: 'spring', // Use spring for a bouncy effect
            stiffness: 100, // Adjust stiffness for more/less bounce
            damping: 10, // Adjust damping for more/less bounce
            duration: 0.5, // Duration of the animation
          }} className='flex flex-col justify-center items-center'>
          <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
            100%
          </h3>
          <p>
            Client Satisfaction Rate
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SocialProf