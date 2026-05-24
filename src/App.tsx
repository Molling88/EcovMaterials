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
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <WhatWeDo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
