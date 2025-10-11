import React, { Fragment } from 'react'
import Banner from './components/banner'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Fotter from './components/Fotter'
const Home = () => {
  return (
    <div className='bg-black'>
      <Banner></Banner>
      <NavBar></NavBar>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Fotter></Fotter>
    </div>
    
  )
}

export default Home