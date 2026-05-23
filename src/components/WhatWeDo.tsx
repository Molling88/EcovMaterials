import { GitBranch, Package, Cloud, Lock } from 'lucide-react';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-page">
      <div className="container">
        <div className="section-title">
          <div className="tag">What We Do</div>
          <h2>Coordinating Circular Recovery</h2>
          <p>
            EcoV specializes in structuring and coordinating the recovery of critical
            materials from end-of-life electronics. Our role is not traditional recycling,
            but feedstock aggregation and supply-chain coordination -- connecting fragmented
            recovery systems with downstream processors and refiners.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card service-card-featured">
            <div className="service-icon">
              <Package size={32} />
            </div>
            <h3>From E-Waste to Feedstock</h3>
            <p>
              We collect, secure, and prepare end-of-life electronics and industrial
              components into certified, traceable critical-minerals feedstock suitable for
              domestic and regional processing.
            </p>
            <div className="service-focus">
              <h4>Our focus is on:</h4>
              <ul>
                <li>
                  <GitBranch size={16} className="list-icon" />
                  Aggregating dispersed material flows
                </li>
                <li>
                  <Lock size={16} className="list-icon" />
                  Ensuring quality, documentation, and traceability
                </li>
                <li>
                  <GitBranch size={16} className="list-icon" />
                  Aligning recovery outputs with downstream technical and compliance requirements
                </li>
              </ul>
            </div>
            <p className="service-note">
              This enables reliable, responsible sourcing without the capital intensity of
              heavy processing infrastructure.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Cloud size={32} />
            </div>
            <h3>Asset-Light by Design</h3>
            <p>
              EcoV operates through an asset-light coordination model that prioritizes
              systems, data integrity, and partnerships over ownership of processing assets.
            </p>
            <p>
              This approach allows us to scale efficiently, adapt to regulatory and market
              conditions, and reduce environmental and financial risk -- while delivering
              value where the supply chain is most constrained.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Lock size={32} />
            </div>
            <h3>Built for Trust and Scale</h3>
            <p>
              Traceability is central to EcoV's work. Our recovery pathways are designed to
              support responsible sourcing, ESG governance, and long-term supply-chain
              resilience.
            </p>
            <p>
              By formalizing recovery systems, we help reduce environmental harm, improve
              accountability, and enable inclusive participation -- while building
              foundations that can scale over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
