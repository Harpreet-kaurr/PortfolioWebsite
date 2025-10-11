'use client'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // adjust for navbar height
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      if (current) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return (
<nav className="sticky z-[9999999] top-0 flex justify-center sm:justify-end items-center bg-[#1a1a1a] 
  gap-6 sm:gap-12 md:gap-16 px-4 sm:px-12 md:px-28 py-4">
  <ul className="flex flex-wrap justify-center sm:justify-end font-medium text-base sm:text-lg md:text-xl gap-4 sm:gap-6 md:gap-8 text-white">
    <li className={`duration-200 transition-all ${active === "hero" ? "text-[#ff4d5a]" : ""}`}>
      <a href="#hero">Home</a>
    </li>
    <li className={`duration-200 transition-all ${active === "about" ? "text-[#ff4d5a]" : ""}`}>
      <a href="#about">About</a>
    </li>
    <li className={`duration-200 transition-all ${active === "projects" ? "text-[#ff4d5a]" : ""}`}>
      <a href="#projects">Projects</a>
    </li>
    <li className={`duration-200 transition-all ${active === "contact" ? "text-[#ff4d5a]" : ""}`}>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</nav>

  );
};

export default NavBar;
