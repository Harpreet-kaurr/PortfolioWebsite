'use client';
import React, { useEffect, useRef, useState } from 'react';

const Skill = ({ name, idx }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // trigger only once
        }
      },
      {
        threshold: 0.2, // triggers when 20% of element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const logos = {
    REACT: './reactLogo.png',
    HTML: './htmlLogos.png',
    CSS: './cssLogo.png',
    JAVASCRIPT: './jsLogo.png',
    NEXTJS: './nextLogo.png',
    SASS: './sassLogo.png',
    NODEJS: './nodejsLogo.png',
    'EXPRESS.JS': './expressLogo.png',
    MONGODB: './mongoLogo.png',
    GIT: './gitLogo.png',
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${idx * 150}ms` }}
      className={`relative p-[2px] rounded-xl bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 
        transition-all duration-700 ease-out transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div
        className="flex flex-col items-center justify-center rounded-xl bg-[#1a1a1a] 
        px-6 sm:px-8 md:px-12 py-2 w-full max-w-[180px] sm:max-w-[200px]"
      >
        <img
          src={logos[name]}
          alt={`${name} Logo`}
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />
        <p className="text-white text-xs sm:text-sm mt-2 font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default Skill;
