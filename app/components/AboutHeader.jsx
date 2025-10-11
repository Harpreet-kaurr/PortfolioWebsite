import React from 'react'

const AboutHeader = ({title}) => {
  return (
<div className="relative flex items-center justify-center py-6 sm:py-9">
  <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold absolute top-2 sm:top-[13px] text-center">
    {title}
  </h1>
  <div className="bg-red-500 h-[8px] sm:h-[12px] md:h-[14px] w-[80px] sm:w-[100px] md:w-[110px]"></div>
</div>

  )
}

export default AboutHeader