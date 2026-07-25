import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaGitAlt,
  FaLaptopCode,
  FaBook,
  FaKey,
} from "react-icons/fa";

import { MdApi } from "react-icons/md";

import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiJupyter,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">
        02 — <span>Skills & Technologies</span>
      </h2>

      <div className="skills-grid">
        {/* LANGUAGES */}
        <div className="skills-box">
          <h3 className="skills-heading">Languages</h3>

          <div className="skills-items">
            <div className="skill-item">
              <SiCplusplus className="skill-icon" />
              <span>C++</span>
            </div>

            <div className="skill-item">
              <FaPython className="skill-icon" />
              <span>Python</span>
            </div>

            <div className="skill-item">
              <FaJs className="skill-icon" />
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        {/* WEB DEVELOPMENT */}
        <div className="skills-box">
          <h3 className="skills-heading">Web Development</h3>

          <div className="skills-items">
            <div className="skill-item">
              <FaReact className="skill-icon" />
              <span>ReactJs</span>
            </div>

            <div className="skill-item">
              <FaNodeJs className="skill-icon" />
              <span>NodeJs</span>
            </div>

            <div className="skill-item">
              <SiExpress className="skill-icon" />
              <span>ExpressJs</span>
            </div>

            <div className="skill-item">
              <SiMongodb className="skill-icon" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        {/* DATA SCIENCE & ML */}
        <div className="skills-box">
          <h3 className="skills-heading">Data Science & ML</h3>

          <div className="skills-items">
            <div className="skill-item">
              <SiNumpy className="skill-icon" />
              <span>NumPy</span>
            </div>

            <div className="skill-item">
              <SiPandas className="skill-icon" />
              <span>Pandas</span>
            </div>

            <div className="skill-item">
              <SiScikitlearn className="skill-icon" />
              <span>Scikit-learn</span>
            </div>

            <div className="skill-item">
              <SiJupyter className="skill-icon" />
              <span>Jupyter</span>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="skills-box">
          <h3 className="skills-heading">Tools</h3>

          <div className="skills-items">
            <div className="skill-item">
              <FaGithub className="skill-icon" />
              <span>GitHub</span>
            </div>

            <div className="skill-item">
              <FaGitAlt className="skill-icon" />
              <span>Git</span>
            </div>

            <div className="skill-item">
              <FaLaptopCode className="skill-icon" /> <span>VS Code</span>
            </div>

            <div className="skill-item">
              <FaBook className="skill-icon" />
              <span>Jupyter Notebook</span>
            </div>

            <div className="skill-item">
              <MdApi className="skill-icon" />
              <span>REST APIs</span>
            </div>

            <div className="skill-item">
              <FaKey className="skill-icon" />
              <span>JWT Authentication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
