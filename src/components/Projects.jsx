import React from 'react';
import './Projects.css';
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const projectsData = [
    {
      title: 'Levvy',
      description:
        'Managed production Kubernetes on EKS for Levvy, a workflow and client management platform. Implemented GitOps with Argo CD, TLS ingress via Cert-Manager and Cloudflare, and full-stack observability with Loki, Tempo, and Alloy.',
      tags: ['AWS', 'EKS', 'Argo CD', 'Drone CI', 'Cloudflare', 'Grafana'],
      live: 'https://www.levvy.com',
    },
    {
      title: 'Testfuse',
      description:
        'Designed AWS infrastructure with Terraform across preview, staging, and production for Testfuse. Deployed on EKS with Helm, CI/CD via GitHub Actions and Drone, and ephemeral preview environments per pull request.',
      tags: ['AWS', 'Terraform', 'EKS', 'Helm', 'GitHub Actions', 'Drone CI'],
      live: 'https://www.testfuse.com',
    },
    {
      title: 'Infergram',
      description:
        'Provisioned GCP infrastructure with Terraform for Infergram’s real-time computer vision and NLP platform. Ran microservices on GKE with Helm, automated CI/CD for model iteration, and monitoring with Prometheus and Grafana.',
      tags: ['GCP', 'Terraform', 'GKE', 'Helm', 'Prometheus', 'Grafana'],
      live: 'https://www.infergram.com',
    },
    {
      title: 'Crewnetics',
      description:
        'Set up and maintained cloud infrastructure for Crewnetics, a workforce analytics platform. Built real-time data pipelines for high-throughput event processing.',
      tags: ['GCP', 'Kafka', 'Apache NiFi', 'Terraform'],
      live: 'https://crewnetics.com',
    },
    {
      title: 'Sarah AI',
      description:
        'Built and managed serverless cloud infrastructure for Sarah AI, a mobile AI assistant. Focused on scalable, cost-efficient, event-driven backends — no public web app.',
      tags: ['AWS', 'Serverless', 'Lambda', 'API Gateway'],
      note: 'Mobile product',
    },
    {
      title: 'Cloud Observability Platform',
      description:
        'Built an internal centralized observability stack — gathering metrics, logs, and traces from multiple services into one place with Prometheus, Grafana, and automated health checks. Not a public product.',
      tags: ['Kubernetes', 'Prometheus', 'Grafana', 'Docker', 'Helm'],
      note: 'Internal',
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          index="04"
          title="Selected work"
          subtitle="Infrastructure and delivery for production products. Repos are private."
        />

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article
              className={`project-card surface reveal ${index === 0 ? 'is-featured' : ''}`}
              key={project.title}
            >
              <div className="project-top">
                <span className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="project-links">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                    >
                      <FiExternalLink />
                    </a>
                  ) : (
                    <span className="project-note">{project.note}</span>
                  )}
                </div>
              </div>

              {project.live ? (
                <h3>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    {project.title}
                    <FiArrowUpRight className="project-arrow" />
                  </a>
                </h3>
              ) : (
                <h3>{project.title}</h3>
              )}
              <p>{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
