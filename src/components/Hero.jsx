import React from 'react';
import './Hero.css';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-status reveal">
            <span className="status-dot" />
            Available for new opportunities
          </p>

          <h1 className="hero-name reveal delay-1">
            Muhammad Zeeshan Farooq
          </h1>

          <p className="hero-role reveal delay-2">Cloud & DevOps Engineer</p>

          <p className="hero-lead reveal delay-2">
            I design and operate scalable cloud platforms on AWS and GCP —
            Kubernetes, Terraform, and CI/CD that stay reliable in production.
          </p>

          <p className="hero-now reveal delay-2">
            Currently at <span>Venturenox</span> · Lahore
          </p>

          <div className="hero-metrics reveal delay-3">
            <div className="metric">
              <strong>3+</strong>
              <span>Years experience</span>
            </div>
            <div className="metric">
              <strong>20+</strong>
              <span>Projects deployed</span>
            </div>
            <div className="metric">
              <strong>99.9%</strong>
              <span>Uptime managed</span>
            </div>
          </div>

          <div className="hero-actions reveal delay-3">
            <a href="#projects" className="btn btn-primary">
              View work <FiArrowRight />
            </a>
            <a
              href={resumeHref}
              download="Muhammad_Zeeshan_Farooq_CV.pdf"
              className="btn btn-outline"
            >
              Download résumé <FiDownload />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal delay-2">
          <figure className="portrait-card">
            <img
              src={profileImg}
              alt="Muhammad Zeeshan Farooq, Cloud and DevOps Engineer"
              className="portrait-img"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
