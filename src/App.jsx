import { Hero } from './components/Hero.jsx'
import { Header } from './components/Header.jsx'
import { Services } from './components/Services.jsx'
import { Projects } from './components/Projects.jsx'
import { About } from './components/About.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

import './App.css'


export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default App
