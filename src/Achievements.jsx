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

        {/* LEETCODE */}
        <div className="education-card">
          <h3 className="edu-sub">
            LeetCode
          </h3>

          <p className="edu-detail">
            Solved 200+ DSA problems with strong focus on arrays, strings, and optimization techniques.
          </p>

          <p className="edu-detail">
            Current Rating: <strong>1512</strong>
          </p>

          <button
            className="action-btn"
            onClick={() =>
              window.open("https://leetcode.com/u/123CS0518/", "_blank")
            }
          >
            View Profile
          </button>
        </div>

        {/* CODECHEF */}
        <div className="education-card">
          <h3 className="edu-sub">
            CodeChef
          </h3>

          <p className="edu-detail">
            Practicing competitive programming and improving problem-solving skills through coding contests.
          </p>

          <p className="edu-detail">
            Current Rating: <strong>1277</strong>
          </p>

          <button
            className="action-btn"
            onClick={() =>
              window.open("https://www.codechef.com/users/sunnykry_31", "_blank")
            }
          >
            View Profile
          </button>
        </div>

        {/* SUPERVISED LEARNING CERTIFICATE */}
        <div className="education-card">
          <h3 className="edu-sub">
            Supervised Learning Certificate
          </h3>
          <p className="edu-detail">
            Completed course on supervised machine learning techniques.
          </p>

          <button
            className="action-btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1ff8l4m2TcqNeVRjQKS7pw6F2xn_Kk6XQ/view?usp=sharing",
                "_blank"
              )
            }
          >
            View Certificate
          </button>
        </div>

        {/* UNSUPERVISED LEARNING CERTIFICATE */}
        <div className="education-card">
          <h3 className="edu-sub">
            Unsupervised Learning Certificate
          </h3>
          <p className="edu-detail">
            Completed course on unsupervised machine learning techniques.
          </p>

          <button
            className="action-btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1U-Nh931Lk_E3jZU8lEAsEXwfleXBxD2_/view?usp=sharing",
                "_blank"
              )
            }
          >
            View Certificate
          </button>
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