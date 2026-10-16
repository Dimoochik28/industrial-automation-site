import { useState } from 'react'

import { Hero } from './components/Hero.jsx'
import { Header } from './components/Header.jsx'
import { Services } from './components/Services.jsx'
import { Projects } from './components/Projects.jsx'
import { About } from './components/About.jsx'
import { Footer } from './components/Footer.jsx'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

export default App
