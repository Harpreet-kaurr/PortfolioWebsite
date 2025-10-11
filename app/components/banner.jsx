import React from 'react'
import DownArrow from '../svgs/DownArrow'
import CanvasCursor from './CanvasCursor'
const banner = () => {
  return (
      <section className="bg-black flex flex-col gap-6 items-center justify-center min-h-screen w-full px-4" id="hero">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center">
        Hello, I&apos;m <span className="text-red-500">Harpreet.</span>
        <br />
        I&apos;m a full stack web developer.
      </h1>

      <div
        className="flex items-center justify-center text-red-500 border-2 border-red-500 py-2 px-6 font-semibold 
          w-full max-w-[200px] transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      >
        View my work
        <DownArrow className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
  </div>
</section>

  )
}

export default banner