"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const Contact = () => {
  return (
    <section className='container' id='contact'>
      <div className='min-h-[70vh] flex items-center'>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>

            <h3 className='uppercase text-main font-bold text-3xl'>Contact me</h3>
            <p className='text-slate-700 text-xl'>Don't be shy! Hit me up! 👇</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='flex items-center gap-10 my-8 flex-wrap'>
            <div className='flex gap-5 items-center'>
              <div className='rounded-2xl bg-main p-2'>
                <IoMdMail className='text-white' size={26} />
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-slate-700'>Mail</h3>
                <motion.p
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }} className='text-slate-700'
                >emad.abbad.23@gmail.com
                </motion.p>
              </div>
            </div>
            <div className='flex gap-5 items-center'>
              <div className='rounded-2xl bg-main p-2'>
                <FaLinkedin className='text-white' size={26} />
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-slate-700'>Linkedin</h3>
                <motion.p
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }} className='text-slate-700'
                >
                  <Link target='_blank' href={"https://www.linkedin.com/in/emad-203/"} className='text-slate-700'>
                    emad abbad
                  </Link>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact