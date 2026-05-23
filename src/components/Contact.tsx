import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const { error } = await supabase.from('contact_submissions').insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      organization: formData.organization.trim(),
      message: formData.message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', organization: '', message: '' });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

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

            {status === 'success' ? (
              <div className="form-success">
                <CheckCircle size={32} />
                <h4>Message Sent</h4>
                <p>Thank you for reaching out. We will review your inquiry and respond as appropriate.</p>
                <button
                  className="btn-secondary"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@organization.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="organization">Organization (optional)</label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send size={16} className="inline ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
