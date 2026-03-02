import React from "react";

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

        <h3 className="hero-subtitle">
          Software Developer • CSE Student at NIT Rourkela
        </h3>

        <p className="hero-description">
          Building elegant solutions through code. Passionate about full-stack
          development and problem solving.
        </p>

        <div className="hero-buttons">
          <a
            href="https://drive.google.com/uc?export=download&id=19_aS-zGAd9dxQRFc9TbV0T6TieVyLVzT"
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