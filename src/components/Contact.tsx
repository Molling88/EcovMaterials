import { Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section-page">
      <div className="container">
        <div className="section-title">
          <div className="tag">Contact</div>
          <h2>Get in Touch</h2>
          <p>
            EcoV works with industry partners, public institutions, research
            organizations, and impact-focused stakeholders interested in responsible
            recovery and circular supply chains.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <p>
              If you would like to explore collaboration, partnership, or learn more about
              our work, we invite you to reach out.
            </p>
            <div className="contact-sidebar">
              <h4>Engagement and Collaboration</h4>
              <p>
                EcoV values thoughtful engagement and responsible collaboration. We welcome
                conversations that contribute to building credible, traceable, and
                sustainable recovery systems.
              </p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Contact EcoV</h3>
            <p className="form-description">
              Please use the form below to get in touch with us. All inquiries are
              reviewed, and we will respond as appropriate.
            </p>

            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value="27eeb4ab-bcac-48d5-b1e6-f105535b25b8" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@organization.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization (optional)</label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="Your organization or company"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="btn-primary submit-btn"
              >
                Send Message
                <Send size={16} className="inline ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
