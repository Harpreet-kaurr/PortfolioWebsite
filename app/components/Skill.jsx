'use client'
import React, { useEffect, useState } from 'react'
import HtmlSvg from '../svgs/Html'
import ReactSVG from '../svgs/React'
const Skill = ({name,idx}) => {
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const current = section.getAttribute("id"); 
      if(current==="about"){
        setVisible(true);
      }
    });
  },[])
  return (
<div
  style={{ transitionDelay: `${idx * 200}ms` }}
  className={`relative p-[2px] rounded-xl bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 
  transition-opacity duration-500 ease 
  ${visible ? "opacity-100" : "opacity-0 translate-y-10"}`}
>
  <div className="flex flex-col items-center justify-center rounded-xl bg-[#1a1a1a] 
    px-6 sm:px-8 md:px-12 py-2 w-full max-w-[180px] sm:max-w-[200px]">
    
    {name === "REACT" && <img src="./reactLogo.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="React Logo" />}
    {name === "HTML" && <img src="./htmlLogos.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="HTML Logo" />}
    {name === "CSS" && <img src="./cssLogo.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="CSS Logo" />}
    {name === "JAVASCRIPT" && <img src="./jsLogo.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="JavaScript Logo" />}
    {name === "NEXTJS" && <img src="./nextLogo.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Next.js Logo" />}
    {name === "SASS" && <img src="./sassLogo.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Sass Logo" />}
    {name === "NODEJS" && <img src="./nodejsLogo.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Node.js Logo" />}
    {name === "EXPRESS.JS" && <img src="./expressLogo.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Express.js Logo" />}
    {name === "MONGODB" && <img src="./mongoLogo.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="MongoDB Logo" />}
    {name === "GIT" && <img src="./gitLogo.png" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Git Logo" />}

    <p className="text-white text-xs sm:text-sm mt-2 font-semibold">{name}</p>
  </div>
</div>



  )
}

export default Skill