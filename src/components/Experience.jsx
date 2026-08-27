import React from 'react';
import './Experience.css';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Experience = () => {
  const experiences = [
    {
      company: 'Venturenox',
      role: 'DevOps Engineer',
      type: 'Full-time',
      period: 'Mar 2023 – Present',
      location: 'Lahore, Pakistan · Hybrid',
      bullets: [
        'Design, deploy, and operate Kubernetes workloads across AWS (EKS) and GCP (GKE) supporting multiple production projects.',
        'Provision and manage cloud infrastructure with Terraform, enabling reproducible, scalable, multi-cloud environments.',
        'Containerise microservice applications using Docker with optimised multi-stage builds to reduce image size and improve performance.',
        'Build and maintain CI/CD pipelines (Drone CI, GitHub Actions) for fast, reliable, and automated deployments.',
        'Implement auto-scaling, high availability, and resource optimisation patterns to improve system reliability.',
        'Drive cost optimisation by right-sizing resources and improving cluster efficiency across cloud environments.',
        'Operate monitoring and observability stacks using CloudWatch, Prometheus, Grafana Alloy, and Tempo.',
        'Collaborate with development teams to improve deployment workflows, platform stability, and overall performance.',
      ],
    },
    {
      company: 'Venturenox',
      role: 'Cloud Engineer Intern',
      type: 'Internship',
      period: 'Nov 2022 – Feb 2023',
      location: 'Lahore, Pakistan',
      bullets: [
        'Containerised applications using Docker with clean multi-stage Dockerfiles to reduce image size.',
        'Managed multi-container setups with Docker Compose for consistent local development environments.',
        'Deployed and tested containerised workloads on Kubernetes using Minikube to learn core K8s concepts.',
        'Created and managed Kubernetes resources — deployments, services, and configs — using Helm charts.',
        'Worked with Google Kubernetes Engine (GKE) to deploy and manage clusters in the cloud.',
        'Provisioned cloud infrastructure with Terraform in a reproducible and automated way.',
        'Built basic CI/CD pipelines using GitHub Actions to automate build, test, and deployment processes.',
      ],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading
          index="02"
          title="Experience"
          subtitle="Building and operating production platforms."
        />

        <ol className="timeline">
          {experiences.map((exp) => (
            <li className="timeline-item reveal" key={`${exp.role}-${exp.period}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <article className="exp-card surface">
                <header className="exp-head">
                  <div>
                    <p className="exp-type">{exp.type}</p>
                    <h3>
                      {exp.role} <span>at {exp.company}</span>
                    </h3>
                  </div>
                  <div className="exp-meta">
                    <span>
                      <FiCalendar /> {exp.period}
                    </span>
                    <span>
                      <FiMapPin /> {exp.location}
                    </span>
                  </div>
                </header>
                <ul className="exp-bullets">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
