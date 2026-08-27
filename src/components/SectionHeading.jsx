import React from 'react';

const SectionHeading = ({ index, title, subtitle }) => (
  <div className="section-heading reveal">
    <p className="section-kicker">
      <span>{index}</span>
      <span className="section-kicker-line" />
    </p>
    <h2 className="section-title">{title}</h2>
    {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
  </div>
);

export default SectionHeading;
