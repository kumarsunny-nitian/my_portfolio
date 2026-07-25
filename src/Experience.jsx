import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">
        05 — <span>Experience</span>
      </h2>

      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-top">
            <div>
              <h3 className="experience-title">
                Full Stack Developer Intern
              </h3>

              <p className="experience-company">
                Significant Infotech
              </p>
            </div>

            <span className="experience-duration">
              May 2026 – July 2026
            </span>
          </div>

          <ul className="experience-list">
            <li>
              Developed and maintained responsive full-stack web applications
              using <span>React.js</span>, <span>Node.js</span>,
              <span> Express.js</span>, and integrated
              <span> MongoDB/MySQL</span> databases with
              <span> RESTful APIs</span>.
            </li>

            <li>
              Collaborated with the development team to build, test, and deploy
              scalable applications while contributing to frontend development,
              backend services, and database integration following industry
              best practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;