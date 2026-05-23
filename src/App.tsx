import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { WhatWeDo } from './components/WhatWeDo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (activeSection !== 'home') {
      const el = document.getElementById(activeSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  useEffect(() => {
    function handleScroll() {
      const sections = ['contact', 'what-we-do', 'about'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('home');
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        <Home onNavigate={setActiveSection} />
        <About />
        <WhatWeDo />
        <Contact />
      </main>
      <Footer onNavigate={setActiveSection} />
    </div>
  );
}

export default App;
