'use client'
import React from 'react'
import AboutHeader from './AboutHeader'
const Contact = () => {
  return (
<section className="bg-black mt-10 mb-28 w-full max-w-[600px] mx-auto px-4" id="contact">
  <AboutHeader title="Contact" />
  <p className="text-white text-base sm:text-lg font-semibold mt-4">
    Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
  </p>

  <form className="flex flex-col gap-4 sm:gap-6 mt-6 relative z-[999999]">
    <input 
      type="text" 
      placeholder="Name" 
      className="bg-[#1a1a1a] p-3 rounded-lg text-white placeholder:text-gray-500 focus:outline-none w-full"
    />
    <input 
      type="email" 
      placeholder="Email" 
      className="bg-[#1a1a1a] p-3 rounded-lg text-white placeholder:text-gray-500 focus:outline-none w-full"
    />
    <textarea 
      placeholder="Message" 
      className="bg-[#1a1a1a] p-3 rounded-lg text-white placeholder:text-gray-500 focus:outline-none w-full h-24 sm:h-32"
    ></textarea>
    <button 
      type="submit" 
      className="text-overlay text-white mt-2 sm:mt-4 px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors w-fit"
    >
      SUBMIT
    </button>
  </form>
</section>

)
}

export default Contact