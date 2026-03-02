import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Sunny Kumar — Built with React</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "40px",
    color: "#64748B",
  },
};

export default Footer;