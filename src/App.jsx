import React from 'react'
import About from './components/About'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='text-colorWhite' >
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App