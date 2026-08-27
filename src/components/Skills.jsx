import React from 'react';
import './Skills.css';
import {
  FaAws,
  FaDocker,
  FaPython,
} from 'react-icons/fa';
import {
  SiKubernetes,
  SiTerraform,
  SiGooglecloud,
  SiPrometheus,
  SiGrafana,
  SiHelm,
  SiGithubactions,
  SiDrone,
  SiAnsible,
  SiArgo,
  SiGitlab,
  SiOpentelemetry,
} from 'react-icons/si';
import { FiActivity, FiLayers } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Skills = () => {
  const groups = [
    {
      title: 'Cloud & infrastructure',
      items: [
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'GCP', icon: <SiGooglecloud />, color: '#4285F4' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
        { name: 'Helm', icon: <SiHelm />, color: '#0F62FE' },
      ],
    },
    {
      title: 'Delivery & automation',
      items: [
        { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF' },
        { name: 'Drone CI', icon: <SiDrone />, color: '#9CA3AF' },
        { name: 'Argo CD', icon: <SiArgo />, color: '#EF7B4D' },
        { name: 'Ansible', icon: <SiAnsible />, color: '#EE0000' },
        { name: 'GitLab CI', icon: <SiGitlab />, color: '#FC6D26' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      ],
    },
    {
      title: 'Observability',
      items: [
        { name: 'Prometheus', icon: <SiPrometheus />, color: '#E6522C' },
        { name: 'Grafana', icon: <SiGrafana />, color: '#F46800' },
        { name: 'Loki', icon: <SiGrafana />, color: '#F46800' },
        { name: 'Tempo', icon: <FiLayers />, color: '#F46800' },
        { name: 'CloudWatch', icon: <FiActivity />, color: '#FF9900' },
        { name: 'OpenTelemetry', icon: <SiOpentelemetry />, color: '#4F62D2' },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          index="03"
          title="Skills"
          subtitle="The platform tools I use day to day — cloud, delivery, and observability."
        />

        <div className="skills-groups">
          {groups.map((group) => (
            <div className="skill-group surface reveal" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="skill-icon" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
