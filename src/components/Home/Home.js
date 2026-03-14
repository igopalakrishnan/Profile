import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Projects from '../Projects/Projects'
import GetInTouch from '../GetInTouch/GetInTouch'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Home
