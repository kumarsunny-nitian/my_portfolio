import React from "react";

const Achievements = () => {
  return (
    <section id="achievements">
      <h2 className="section-title">
        04 — <span>Achievements & Certifications</span>
      </h2>

      <div className="achievement-container">

        {/* CULFEST */}
        <div className="achievement-card">
          <div className="achievement-icon">🏆</div>

          <h3>1st Runner-up – Culfest</h3>

          <p>
            Secured <strong>1st Runner-up</strong> at Culfest, NIT Jamshedpur,
            showcasing teamwork, creativity, and problem-solving skills.
          </p>
        </div>

        {/* LEETCODE */}
        <div className="achievement-card">
          <div className="achievement-icon">💻</div>

          <h3>LeetCode</h3>

          <p>
            Solved <strong>240+ DSA problems</strong> with a peak rating of
            <strong> 1512</strong>, focusing on algorithms, data structures,
            and optimization.
          </p>

          <a
            href="https://leetcode.com/u/123CS0518/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
          >
            View Profile
          </a>
        </div>

        {/* CODECHEF */}
        <div className="achievement-card">
          <div className="achievement-icon">⚡</div>

          <h3>CodeChef</h3>

          <p>
            Active competitive programmer with a current rating of
            <strong> 1280</strong>, regularly participating in coding contests.
          </p>

          <a
            href="https://www.codechef.com/users/sunnykry_31"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
          >
            View Profile
          </a>
        </div>

        {/* SUPERVISED ML */}
        <div className="achievement-card">
          <div className="achievement-icon">📜</div>

          <h3>Supervised Machine Learning</h3>

          <p>
            Successfully completed Andrew Ng's Supervised Machine Learning
            course covering regression, classification, and model evaluation.
          </p>

          <a
            href="https://drive.google.com/file/d/1ff8l4m2TcqNeVRjQKS7pw6F2xn_Kk6XQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
          >
            View Certificate
          </a>
        </div>

        {/* UNSUPERVISED ML */}
        <div className="achievement-card">
          <div className="achievement-icon">🤖</div>

          <h3>Advanced Learning Algorithms</h3>

          <p>
            Completed advanced machine learning concepts including neural
            networks, decision trees, and ensemble learning.
          </p>

          <a
            href="https://drive.google.com/file/d/1U-Nh931Lk_E3jZU8lEAsEXwfleXBxD2_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
          >
            View Certificate
          </a>
        </div>

        {/* CLUBS */}
        <div className="achievement-card">
          <div className="achievement-icon">🎯</div>

          <h3>Leadership & Clubs</h3>

          <p>
            Coordinator at <strong>NITRIMUN</strong> and active member of
            <strong> Actomania Club</strong>, contributing to technical,
            cultural, and organizational events.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;