
import React, { useEffect } from 'react';
import './styles/index.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

function App() {
  useEffect(() => {
    // If you are using Google Analytics, keep this line; otherwise, remove it
   
    
    // Remove GSAP animation code
    // const animateElements = (selector, props) => {
    //   gsap.utils.toArray(selector).forEach(element => {
    //     gsap.from(element, {
    //       ...props,
    //       scrollTrigger: {
    //         trigger: element,
    //         start: 'top 80%',
    //       }
    //     });
    //   });
    // };

    // animateElements('.fade-in', { opacity: 0, duration: 1 });
    // animateElements('.slide-up', { y: 50, opacity: 0, duration: 1 });
    // animateElements('.slide-in-left', { x: -50, opacity: 0, duration: 1 });
    // animateElements('.slide-in-right', { x: 50, opacity: 0, duration: 1 });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AudioPlayer />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
