import { Leaf } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
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
              <li><button onClick={() => onNavigate('home')}>Home</button></li>
              <li><button onClick={() => onNavigate('about')}>About</button></li>
              <li><button onClick={() => onNavigate('what-we-do')}>What We Do</button></li>
              <li><button onClick={() => onNavigate('contact')}>Contact</button></li>
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
