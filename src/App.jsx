import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-app">
      <div className="bg-gradient-animate"></div>
      <div className="bg-glow" style={{ top: '10%', left: '10%' }}></div>
      <div className="bg-glow" style={{ top: '60%', right: '10%' }}></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer className="container" style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Archana J. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>Built with Passion & React.</p>
      </footer>
    </div>
  );
}

export default App;
