'use client'
import React, { useEffect, useState } from 'react'
import Person from '../svgs/Person'
import FadeInSection from './FadeInSection'
const LeftSectionAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.8) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the section is already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
<div className={`flex flex-col items-center justify-center relative px-4 left-[-300px] transition-all duration-[1100ms] ease-out ${isVisible ? "opacity-100 translate-x-[300px] " : "opacity-0 translate-x-[75px]"} `}>
  {/* <FadeInSection> */}
    <div className='w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px]'>
      <Person />
      </div>
    <p className="text-white text-sm sm:text-base font-semibold max-w-full sm:max-w-[500px] text-center sm:text-left mt-4">
      Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion 
      for JavaScript, React and all things web development. The unique combination of creativity, logic, 
      technology and never running out of new things to discover, drives my excitement and passion for web 
      development. When I'm not at my computer I like to spend my time reading, keeping fit and playing guitar.
    </p>
  {/* </FadeInSection> */}
</div>

  )
}

export default LeftSectionAbout