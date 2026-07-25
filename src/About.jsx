import React from "react";
import profile from "./assets/sunny.png";

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">
        01 — <span>About Me</span>
      </h2>

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={profile} alt="Sunny Kumar" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <p className="about-description">
            I am a{" "}
            <span className="highlight">
              Computer Science undergraduate
            </span>{" "}
            at the{" "}
            <span className="highlight">
              National Institute of Technology, Rourkela
            </span>
            , passionate about software development and problem solving.
            I have hands-on experience building{" "}
            <span className="highlight">
              full-stack web applications
            </span>{" "}
            using the{" "}
            <span className="highlight">MERN stack</span> and possess a
            strong foundation in Data Structures and Algorithms, with
            240+ problems solved on LeetCode.
          </p>

          <p className="about-description">
            I have also explored{" "}
            <span className="highlight">
              AI & Machine Learning
            </span>{" "}
            concepts using tools and libraries like{" "}
            <span className="highlight">
              NumPy, Pandas, Matplotlib, and Scikit-learn
            </span>
            . I enjoy learning modern technologies and applying them to
            real-world projects and problem-solving.
          </p>

          <p className="about-description">
            My projects include a Blog Application and BookVerse, an
            online bookstore with secure authentication and live
            deployment. I am continuously improving my technical skills
            while aiming to develop scalable, efficient, and
            user-focused software solutions.
          </p>

          {/* CARDS */}
          {/* CARDS */}
<div className="about-cards">

  <div className="about-card">
    <i className="fa-solid fa-laptop-code card-icon"></i>

    <h3 className="card-title gradient-one">
      Full Stack
    </h3>

    <p className="card-text">
      React • Node • MongoDB
    </p>
  </div>

  <div className="about-card">
    <i className="fa-solid fa-code card-icon"></i>

    <h3 className="card-title gradient-two">
      Problem Solving
    </h3>

    <p className="card-text">
      240+ LeetCode
    </p>
  </div>

  <div className="about-card">
    <i className="fa-solid fa-robot card-icon"></i>

    <h3 className="card-title gradient-three">
      AI & ML
    </h3>

    <p className="card-text">
      OpenAI • Scikit-learn
    </p>
  </div>

</div>
        </div>
      </div>
    </section>
  );
};

export default About;