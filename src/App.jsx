import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Project';
// import Experience from './components/Experience';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
