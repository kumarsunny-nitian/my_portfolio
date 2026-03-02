import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">
        05 — <span>Experience</span>
      </h2>

      <div className="experience-container">

        {/* NITRIMUN */}
        <div className="experience-card">
          <h3 className="experience-title">
            Coordinator — NITRIMUN
          </h3>
          <p className="experience-desc">
            Managed events, delegates, and logistics ensuring smooth execution
            while coordinating teams and maintaining efficient communication.
          </p>
        </div>

        {/* ACTOMANIA */}
        <div className="experience-card">
          <h3 className="experience-title">
            Team Member — Actomania Club
          </h3>
          <p className="experience-desc">
            Collaborated in cultural performances and event organization,
            strengthening teamwork, creativity, and communication skills.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;