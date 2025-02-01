import React from 'react'

const SocialProf = () => {
  return (
    <div className='h-full md:h-[30vh] bg-slate-800'>
      <div className="container grid md:grid-cols-3 gap-8 md:gap-0 text-white h-full py-6 md:py-0">
        <div className='flex flex-col justify-center items-center h-full'>
          <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
            +4
          </h3>
          <p>
            Years Working Experience
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
            +10
          </h3>
          <p>
            Project Done
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
            100%
          </h3>
          <p>
            Client Satisfaction Rate
          </p>
        </div>
      </div>
    </div>
  )
}

export default SocialProf