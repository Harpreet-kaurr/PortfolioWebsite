import AboutHeader from './AboutHeader'
import ProjectContainer from './ProjectContainer'
import ProjectText from './ProjectText'
const Projects = () => {
  return (
<section className="bg-black" id="projects">
  <AboutHeader title="Projects" />
  <div className="flex flex-col gap-20">
    
    {/* First project row */}
    <div className="flex flex-col lg:flex-row items-start justify-start max-w-[1300px] w-full m-auto px-4 gap-8">
      <div className="w-full lg:w-3/4">
        <ProjectContainer />
      </div>
      <div className="w-full lg:w-1/4">
        <ProjectText />
      </div>
    </div>

    {/* Second project row */}
    <div className="flex flex-col lg:flex-row items-start justify-start max-w-[1300px] w-full m-auto px-4 gap-8">
      <div className="w-full lg:w-1/4">
        <ProjectText />
      </div>
      <div className="w-full lg:w-3/4">
        <ProjectContainer />
      </div>
    </div>

  </div>
</section>

  )
}

export default Projects