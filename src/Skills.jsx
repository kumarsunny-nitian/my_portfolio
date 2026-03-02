import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">
        02 — <span>Tech Stack</span>
      </h2>

      <div className="skills-container">

        {/* LANGUAGES */}
        <div className="skill-card">
          <h3 className="skill-title">Languages</h3>
          <p>C++, Python, JavaScript</p>
        </div>

        {/* WEB DEVELOPMENT */}
        <div className="skill-card">
          <h3 className="skill-title">Web Development</h3>
          <p>React, Node.js, Express, MongoDB</p>
        </div>

        {/* DATA & ANALYSIS */}
        <div className="skill-card">
          <h3 className="skill-title">Data & Analysis</h3>
          <p>
            Jupyter Notebook, NumPy, Pandas, Matplotlib, Seaborn
          </p>
        </div>

        {/* TOOLS */}
        <div className="skill-card">
          <h3 className="skill-title">Tools</h3>
          <p>GitHub, VS Code, Git</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;