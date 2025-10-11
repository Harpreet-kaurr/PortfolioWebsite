import React from 'react'
import Skill from './Skill'
const SkillSection = () => {
  return (
<div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-center gap-6">
  <div className="flex flex-col justify-center gap-6 w-full sm:w-1/2 md:w-auto">
    <Skill idx={1} name="HTML" />
    <Skill idx={7} name="REACT" />
    <Skill idx={8} name="EXPRESS.JS" />
  </div>

  <div className="flex flex-col justify-center gap-6 w-full sm:w-1/2 md:w-auto">
    <Skill idx={2} name="CSS" />
    <Skill idx={5} name="JAVASCRIPT" />
    <Skill idx={10} name="MONGODB" />
    <Skill idx={4} name="GIT" />
  </div>

  <div className="flex flex-col justify-center gap-6 w-full sm:w-1/2 md:w-auto">
    <Skill idx={3} name="NEXTJS" />
    <Skill idx={6} name="SASS" />
    <Skill idx={9} name="NODEJS" />
  </div>
</div>


  )
}

export default SkillSection