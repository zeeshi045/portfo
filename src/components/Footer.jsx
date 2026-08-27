import React from 'react';
import './Footer.css';
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import { GITHUB, LINKEDIN } from '../constants';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <span className="logo-mark">MZ</span>
        <p>Muhammad Zeeshan Farooq</p>
      </div>

      <p className="footer-copy">
        Designed & built by Muhammad Zeeshan Farooq
      </p>

      <div className="footer-right">
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
          <FiGithub />
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
          <FiLinkedin />
        </a>
        <a href="#home" className="icon-btn" aria-label="Back to top">
          <FiArrowUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
