import React, { useState } from 'react';
import './Contact.css';
import { EMAIL } from '../constants';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const PHONE_DISPLAY = '+92 349 8776860';
const PHONE_TEL = '+923498776860';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: <FiMapPin />, label: 'Location', value: 'Lahore, Pakistan', href: null },
    { icon: <FiPhone />, label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          index="05"
          title="Get in touch"
          subtitle="Have a role, a platform problem, or just want to talk infrastructure? Send a note."
        />

        <div className="contact-grid">
          <div className="contact-info">
            {contactInfo.map((item) => (
              <div className="contact-info-card surface reveal" key={item.label}>
                <span className="info-icon">{item.icon}</span>
                <div>
                  <p className="info-label">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="info-value">{item.value}</a>
                  ) : (
                    <p className="info-value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form surface reveal delay-1" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="What are you working on?"
                required
              />
            </div>
            <button type="submit" className={`btn btn-primary contact-submit ${sent ? 'is-sent' : ''}`}>
              {sent ? 'Opening email…' : <><FiSend /> Send message</>}
            </button>
            <p className="form-hint">
              This opens your email app with the message ready to send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
