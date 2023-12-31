import React from 'react';
import "./project.css";
import Projects from './Projects';

const Works = () => {
  return (
    <section className="work__section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent projects</span>

        <Projects />

    </section>
  )
}

export default Projects