import React from 'react'

const ProjectText = () => {
  return (
<div className="flex flex-col relative z-[999999] gap-5 px-4 sm:px-6 
  top-0 left-0 lg:top-[8rem] lg:left-[-6rem]">
  
  <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-snug">
    lifeInvaders <br /> Social Media App
  </h3>

  <p className="text-sm sm:text-base md:text-lg text-white max-w-[500px]">
    Full stack social media application built with React, Node.js, Express.js, 
    MongoDB, Socket.io and AWS S3.
  </p>

  <a
    className="text-sm sm:text-base font-semibold relative bg-red-500 px-4 py-2 rounded-lg w-fit text-white hover:bg-red-600 transition-colors"
    href="/"
  >
    LIVE APP
  </a>

  <a
    className="text-sm sm:text-base font-semibold relative border border-red-500 px-4 py-2 rounded-lg w-fit text-white hover:bg-red-500 transition-colors"
    href="/"
  >
    LEARN MORE
  </a>
</div>

  )
}

export default ProjectText