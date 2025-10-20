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
        <ProjectContainer image="/NirvaanBanner.png"  />
      </div>
      <div className="w-full lg:w-1/4">
        <ProjectText 
          title="Nirvaana Protection" 
          purpose="Security Service Agency"
          desc="Security Service Agency application built with React.js, vite,  Javascript, Tailwind CSS, 
          Semantic HTML, Context API."
          link="https://nirvaanaprotection.com/"
          gitlink="/"
        />
      </div>
    </div>

    {/* Second project row */}
    <div className="flex flex-col lg:flex-row items-start justify-start max-w-[1300px] w-full m-auto px-4 gap-8">
      <div className="w-full lg:w-1/4">
        <ProjectText
          title="Carpooll" 
          purpose="Ride Sharing App"
          desc="A ride sharing application built with Next.js, Firebase, Google maps, Context API, Javscript"
          link="https://carpooll.com/"
          gitlink="/"
        />
      </div>
      <div className="w-full lg:w-3/4">
        <ProjectContainer image="/CarpoollBanner.png" />
      </div>
    </div>

    {/* Third project row */}
    <div className="flex flex-col lg:flex-row items-start justify-start max-w-[1300px] w-full m-auto px-4 gap-8">
      <div className="w-full lg:w-3/4">
        <ProjectContainer image="/ChatAppBanner2.png" />
      </div>
      <div className="w-full lg:w-1/4">
        <ProjectText
          title="Talk-A-Tive" 
          purpose="Chatting App"
          desc="A Chatting application built with React.js, Node.js, Express.js, MongoDB, bcryptjs, jsonwebtoken, socket.io"
          link="https://talkative-g0ba.onrender.com/"
          gitlink="/"
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default Projects