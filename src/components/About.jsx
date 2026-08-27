import React from 'react';
import './About.css';
import { FiCloud, FiCpu, FiGitMerge } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const About = () => {
  const highlights = [
    {
      icon: <FiCloud />,
      title: 'Multi-cloud',
      text: 'Production platforms on AWS and GCP, with a focus on reliability and cost.',
    },
    {
      icon: <FiCpu />,
      title: 'Kubernetes',
      text: 'EKS and GKE workloads, Helm, and cluster efficiency at scale.',
    },
    {
      icon: <FiGitMerge />,
      title: 'Delivery',
      text: 'Terraform, CI/CD, and observability so releases stay fast and safe.',
    },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading
          index="01"
          title="About"
          subtitle="Cloud infrastructure, automation, and platforms that stay up."
        />

        <div className="about-layout">
          <div className="about-copy reveal delay-1">
            <p>
              I'm <strong>Muhammad Zeeshan Farooq</strong>, a Cloud & DevOps Engineer with{' '}
              <strong>3+ years</strong> of experience building and scaling cloud-native platforms
              on <strong>AWS</strong> and <strong>GCP</strong>.
            </p>
            <p>
              I specialize in Kubernetes infrastructure, containerized microservices, and
              Infrastructure as Code with <strong>Terraform</strong>. I also design CI/CD pipelines
              for fast and reliable deployments while optimizing cloud costs and cluster efficiency.
            </p>
            <p>
              Gold Medalist in Computer Science from <strong>COMSATS University Islamabad</strong>.
            </p>
          </div>

          <div className="about-cards">
            {highlights.map((item) => (
              <article className="about-card surface reveal delay-2" key={item.title}>
                <span className="about-card-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
