import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-badge">
          <span className="dot"></span> Available for opportunities
        </p>

        <h1 className="hero-title">
          Sunny <span>Kumar Yadav</span>
        </h1>

        {/* AUTO TYPING TEXT */}
        <h3 className="hero-subtitle">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "AI & ML Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>

        <p className="hero-description">
          Building elegant solutions through code. Passionate about
          full-stack development, AI/ML, and problem solving.
        </p>

        <div className="hero-buttons">
          <a
            href="https://drive.google.com/uc?export=download&id=1oiS1J_Zi6hozXXC4i5hIUeuKUinRuH0N"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;