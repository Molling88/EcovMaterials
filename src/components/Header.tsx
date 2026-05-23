import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'what-we-do', label: 'What We Do' },
    { id: 'contact', label: 'Contact' },
  ];

  function handleNav(section: string) {
    onNavigate(section);
    setMobileMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <button onClick={() => handleNav('home')} className="logo flex items-center gap-2 min-w-0">
            <Leaf size={24} className="text-green-500 shrink-0" strokeWidth={2.5} />
            <span className="text-sm md:text-lg font-bold tracking-tight text-green-400 whitespace-nowrap">
              EcoV <span className="font-medium text-slate-400">Materials Inc.</span>
            </span>
          </button>
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
