import React, { useState, useEffect } from 'react';
import './Header.css';
import { GITHUB, LINKEDIN } from '../constants';
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiLinkedin } from 'react-icons/fi';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) current = id;
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''} ${mobileMenuOpen ? 'is-open' : ''}`}>
      <span className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-mark">MZ</span>
          <span className="logo-text">Zeeshan Farooq</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'is-active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn desktop-only"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn desktop-only"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <a href="#contact" className="btn btn-primary header-cta desktop-only">
            Let’s talk
          </a>

          <button
            className="icon-btn mobile-toggle"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'is-active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
            Let’s talk
          </a>
          <div className="mobile-drawer-social">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
