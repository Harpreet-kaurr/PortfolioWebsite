import React from 'react'

const ProjectText = ({title,purpose,desc,link,gitlink}) => {
  return (
<div className="flex flex-col relative z-[999999] gap-5 px-4 sm:px-6 
  top-0 left-0 lg:top-[8rem] lg:left-[-6rem]">
  
  <h3 className="text-2xl sm:text-3xl md:text-lg text-white font-bold leading-snug">
    {title} <br /> {purpose}
  </h3>

  <p className="text-sm sm:text-base md:text-lg text-white max-w-[500px]">
    {desc}
  </p>

  <a
    className="text-sm sm:text-base font-semibold relative bg-red-500 px-4 py-2 rounded-lg w-fit text-white hover:bg-red-600 transition-colors"
    href={link}
    target='_blank'
  >
    LIVE APP
  </a>

  {/* <a
    className="text-sm sm:text-base font-semibold relative border border-red-500 px-4 py-2 rounded-lg w-fit text-white hover:bg-red-500 transition-colors"
    href={gitlink}
  >
    LEARN MORE
  </a> */}
</div>

  )
}

export default ProjectText