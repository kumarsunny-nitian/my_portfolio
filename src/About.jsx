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
            I am a Computer Science undergraduate at the National Institute of
            Technology, Rourkela, passionate about software development and
            problem solving. I have hands-on experience building full-stack web
            applications using the MERN stack and possess a strong foundation
            in Data Structures and Algorithms, with 150+ problems solved on
            LeetCode.
          </p>

          <p className="about-description">
            My projects include a Blog Application and BookVerse, an online
            bookstore with secure authentication and live deployment. I am
            continuously improving my technical skills while aiming to develop
            scalable, efficient, and user-focused software solutions.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>Software Development</h3>
              <p>Scalable and efficient applications.</p>
            </div>

            <div className="about-card">
              <h3>Problem Solving</h3>
              <p>Strong DSA foundation.</p>
            </div>

            <div className="about-card">
              <h3>Full Stack</h3>
              <p>End-to-end web development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;