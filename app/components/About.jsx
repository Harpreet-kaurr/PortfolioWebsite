import React from 'react'
import AboutHeader from './AboutHeader'
import LeftSectionAbout from './LeftSectionAbout'
import SkillSection from './SkillSection'
const About = () => {
  return (
    <section className="bg-black pb-[100px]" id="about">
    <div className="max-w-[1300px] w-full mx-auto px-4">
      <AboutHeader title="About" />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <LeftSectionAbout />
        <SkillSection />
      </div>
    </div>
</section>

  )
}

export default About

// import React from 'react';

// const AboutSection = () => {
//   const skills = [
//     'HTML',
//     'REACT',
//     'EXPRESS.JS',
//     'JAVASCRIPT',
//     'CSS',
//     'MONGODB',
//     'GIT',
//     'SASS',
//     'NEXT.JS',
//     'NODE.JS'
//   ];

//   return (
//     <section className="py-16 px-4 max-w-6xl mx-auto">
//       {/* About Heading */}
//       <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
//         About
//       </h2>
      
//       {/* About Content */}
//       <div className="max-w-4xl mx-auto">
//         {/* Description Paragraph */}
//         <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-16 text-center">
//           Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I'm not at my computer I like to spend my time reading, keeping fit and playing guitar.
//         </p>
        
//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={skill}
//               className="group relative"
//               style={{
//                 animationDelay: `${index * 0.1}s`
//               }}
//             >
//               {/* Skill Card */}
//               <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 hover:shadow-lg group-hover:bg-blue-50">
//                 <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
//                   {skill}
//                 </span>
//               </div>
              
//               {/* Hover Effect Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
