import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Sunny Kumar Yadav</div>

      <div style={styles.links}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    padding: "20px 10%",
    background: "rgba(11, 15, 20, 0.8)",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  logo: {
    fontWeight: "700",
    fontSize: "20px",
    color: "#22D3EE",
  },
  links: {
    display: "flex",
    gap: "25px",
  },
};

export default Navbar;