import React from "react";

const Education = () => {
  return (
    <section id="education">
      <h2 className="section-title">
        06 — <span>Education</span>
      </h2>

      <div className="education-container">

        {/* B.Tech */}
        <div className="education-card">
          <div className="edu-header">
            <h3>B.Tech in Computer Science & Engineering</h3>
            <span>Aug 2023 – Present</span>
          </div>
          <p className="edu-sub">
            National Institute of Technology, Rourkela
          </p>
          <p className="edu-detail">
            CGPA: 6.67 | Currently Pursuing
          </p>
        </div>

        {/* 12th */}
        <div className="education-card">
          <div className="edu-header">
            <h3>A.N.S College, Barh, Patna</h3>
            <span>Feb 2023</span>
          </div>
          <p className="edu-sub">BSEB Science (PCM)</p>
          <p className="edu-detail">
            Percentage: 73% | Patna, Bihar
          </p>
        </div>

        {/* 10th */}
        <div className="education-card">
          <div className="edu-header">
            <h3>Utkramit M S Mubarakput, Barh, Patna</h3>
            <span>Feb 2021</span>
          </div>
          <p className="edu-sub">BSEB</p>
          <p className="edu-detail">
            Percentage: 88.9% | Patna, Bihar
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;