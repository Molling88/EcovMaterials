import { Leaf } from 'lucide-react';

export function Footer() {
  function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo flex items-center gap-2">
              <Leaf size={24} className="text-green-500" strokeWidth={2.5} />
              <h3>EcoV Materials Inc.</h3>
            </div>
            <p>
              Coordinating the responsible recovery of critical materials from end-of-life
              electronics. Building circular supply chains that are efficient, credible,
              and traceable.
            </p>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
              <li><a href="#what-we-do" onClick={(e) => scrollToSection(e, 'what-we-do')}>What We Do</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Focus Areas</h4>
            <ul>
              <li><span>Critical Materials</span></li>
              <li><span>Supply Chain Coordination</span></li>
              <li><span>Traceability Systems</span></li>
              <li><span>Circular Economy</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 EcoV Materials Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
