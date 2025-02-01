"use client"
import React from 'react'
import Image from 'next/image'
import AboutImage from '@/assets/Rectangle-min.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='min-h-screen' id='about'>
      <div className='container flex justify-center items-center h-full'>
        <div className='py-12 flex justify-center flex-col gap-5 items-center'>

          <div className='md:grid md:grid-cols-3 gap-5'>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='col-span-2'
            >
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className='uppercase text-main font-bold text-3xl mb-5'>about me</h3>
              </motion.div>

              <p className='md:text-xl text-slate-700'>
                <span className='font-semibold text-slate-800'>
                  I'm a Web Developer based in Algeria 📍.
                </span>
                <br /> My name is Emad, and I&apos;m a Web Developer.
                I build modern, user-friendly websites and apps.
                My focus is on creating clean, smooth, and easy-to-use
                experiences for my clients. <br />
                I’m passionate about bringing ideas to life online.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='mt-5 md:mt-0'
            >
              <Image className='rounded' src={AboutImage} alt='about' />
            </motion.div>
          </div>

          <motion.div
            className='mt-3'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <div className='flex items-center gap-3'>
              <span>
                Tech Stack
              </span>
              <div className='bg-slate-400 w-0.5 h-5'></div>
              <div className='flex items-center flex-wrap gap-8'>
                <div>
                  <img src={'https://skillicons.dev/icons?i=html,css,tailwind'} alt="html,css,tailwind" />
                </div>
                <div>
                  <img src={'https://skillicons.dev/icons?i=js,ts'} alt="icons?i=js,ts" />
                </div>
                <div>
                  <img src={'https://skillicons.dev/icons?i=react,next'} alt="react,next" />
                </div>
                <div>
                  <img src={'https://skillicons.dev/icons?i=supabase,nodejs'} alt="react,next" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About