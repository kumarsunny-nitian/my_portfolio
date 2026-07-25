import React from "react";
import nitrkl from "./assets/nitrkl.png";
import intermediate from "./assets/intermediate.png";

const Education = () => {
  return (
    <section id="education">
      <h2 className="section-title">
        06 — <span>Education</span>
      </h2>

      <div className="education-timeline">

        {/* B.Tech */}
        <div className="timeline-item">
          <div className="timeline-logo">
            <img src={nitrkl} alt="NIT Rourkela" />
          </div>

          <div className="timeline-content">
            <div className="timeline-header">
              <h3>B.Tech in Computer Science & Engineering</h3>
              <span>Aug 2023 – Present</span>
            </div>

            <h4>National Institute of Technology, Rourkela</h4>

            <p>
              CGPA: <strong>6.75</strong>
            </p>

            <p>Currently Pursuing</p>
          </div>
        </div>

        {/* 12th */}
        <div className="timeline-item">
          <div className="timeline-logo">
            <img src={intermediate} alt="A.N.S College" />
          </div>

          <div className="timeline-content">
            <div className="timeline-header">
              <h3>A.N.S College, Barh, Patna</h3>
              <span>Feb 2023</span>
            </div>

            <h4>BSEB Science (PCM)</h4>

            <p>
              Percentage: <strong>73%</strong>
            </p>

            <p>Patna, Bihar</p>
          </div>
        </div>

        {/* 10th */}
        <div className="timeline-item">
          <div className="timeline-logo school-logo">
            🎓
          </div>

          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Utkramit M.S. Mubarakpur, Barh, Patna</h3>
              <span>Feb 2021</span>
            </div>

            <h4>Bihar School Examination Board (BSEB)</h4>

            <p>
              Percentage: <strong>88.9%</strong>
            </p>

            <p>Patna, Bihar</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;