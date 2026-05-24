import { ArrowRight, RefreshCw, Shield, TrendingUp } from 'lucide-react';

export function Home() {
  function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-centered">
          <div className="tag">Circular Economy Infrastructure</div>
          <h2>Coordinating the Responsible Recovery of Critical Materials</h2>
          <p>
            EcoV strengthens circular supply chains by structuring the recovery of critical
            materials from end-of-life electronics -- delivering environmental, economic,
            and social value at scale.
          </p>
          <div className="cta-group">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn-primary">
              Get in Touch
              <ArrowRight size={18} className="inline ml-2" />
            </a>
            <a href="#what-we-do" onClick={(e) => scrollToSection(e, 'what-we-do')} className="btn-secondary">
              Learn More
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-icon">
                <RefreshCw size={24} />
              </div>
              <div className="stat-label">Circular Recovery</div>
              <div className="stat-desc">Structured pathways from e-waste to certified feedstock</div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <Shield size={24} />
              </div>
              <div className="stat-label">Full Traceability</div>
              <div className="stat-desc">Transparent, accountable systems built on data integrity</div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <TrendingUp size={24} />
              </div>
              <div className="stat-label">Asset-Light Model</div>
              <div className="stat-desc">Scalable coordination without heavy infrastructure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
