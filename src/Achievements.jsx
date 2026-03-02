import React from "react";

const Achievements = () => {
  return (
    <section id="achievements">
      <h2 className="section-title">
        04 — <span>Achievements</span>
      </h2>

      <div className="education-container">

        {/* CULFEST */}
        <div className="education-card">
          <h3 className="edu-sub">
            1st Runner-up at Culfest
          </h3>
          <p className="edu-detail">
            NIT Jamshedpur — Competitive Event Recognition
          </p>
        </div>

        {/* COMPETITIVE PROGRAMMING */}
        <div className="education-card">
          <h3 className="edu-sub">
            Competitive Programming
          </h3>

          <p className="edu-detail">
            Solved 180+ problems on LeetCode
          </p>

          <a
            href="https://leetcode.com/u/123CS0518/"
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode-link"
          >
            View LeetCode Profile →
          </a>
        </div>

        {/* CLUB MEMBERSHIPS */}
        <div className="education-card">
          <h3 className="edu-sub">
            Club Memberships
          </h3>
          <p className="edu-detail">
            Active member of technical & cultural clubs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;