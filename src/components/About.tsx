import { Layers, Eye, Compass } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-page">
      <div className="container">
        <div className="section-title">
          <div className="tag">About EcoV</div>
          <h2>Our Purpose</h2>
          <p>
            EcoV was created to address a simple but urgent reality: valuable materials
            critical to modern economies are being lost, while the systems designed to
            recover them remain fragmented, opaque, and often unsafe.
          </p>
        </div>

        <div className="content-block">
          <p className="content-text">
            We exist to help build a circular economy that is efficient, credible,
            traceable, and responsible by design.
          </p>
        </div>

        <div className="mission-block">
          <h3>Our Mission</h3>
          <p>
            EcoV's mission is to strengthen circular supply chains by coordinating the
            responsible recovery of critical materials from end-of-life
            electronics -- delivering environmental, economic, and social value at scale.
          </p>
          <p>
            We focus on enabling systems that work across regulatory, technical, and social
            boundaries, rather than relying on extractive or capital-intensive models.
          </p>
        </div>

        <div className="principles-header">
          <h3>How We Think</h3>
        </div>

        <div className="principles-grid">
          <div className="principle-card">
            <div className="principle-icon">
              <Layers size={28} />
            </div>
            <h4>Coordination Over Extraction</h4>
            <p>
              EcoV operates at the coordination layer of the circular economy. We believe
              the greatest leverage lies not in owning heavy infrastructure, but in
              structuring flows, aligning incentives, and ensuring trust across
              supply-chain actors.
            </p>
          </div>
          <div className="principle-card">
            <div className="principle-icon">
              <Eye size={28} />
            </div>
            <h4>Traceability Builds Trust</h4>
            <p>
              Transparent, traceable recovery systems are essential to responsible sourcing
              and long-term supply-chain resilience. EcoV prioritizes data integrity and
              accountability as core design principles.
            </p>
          </div>
          <div className="principle-card">
            <div className="principle-icon">
              <Compass size={28} />
            </div>
            <h4>Impact by Design</h4>
            <p>
              Environmental protection, safer livelihoods, and commercial viability can
              reinforce one another when systems are intentionally designed. EcoV
              integrates inclusive participation while improving overall system performance.
            </p>
          </div>
        </div>

        <div className="looking-ahead">
          <h3>Looking Ahead</h3>
          <p>
            We envision a future where critical materials are recovered through
            transparent, accountable systems that reduce environmental harm, strengthen
            supply security, and enable more inclusive economic participation.
          </p>
          <p className="closing-statement">
            EcoV is building toward that future -- one structured supply chain at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
