import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">
        07 — <span>Get in Touch</span>
      </h2>

      <div className="contact-box-container">

        <a href="mailto:sunnykumarrasulla@gmail.com" className="contact-box">
          <i className="fa-solid fa-envelope"></i>
          <span>sunnykumarrasulla@gmail.com</span>
        </a>

        <a href="tel:+918051962677" className="contact-box">
          <i className="fa-solid fa-phone"></i>
          <span>+91 8051962677</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sunny-kumar-529748316/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-box"
        >
          <i className="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.facebook.com/kumar.sunny.977631/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-box"
        >
          <i className="fa-brands fa-facebook"></i>
          <span>Facebook</span>
        </a>

        <a
          href="https://www.instagram.com/sunny_kumar_.yadav/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-box"
        >
          <i className="fa-brands fa-instagram"></i>
          <span>Instagram</span>
        </a>

      </div>
    </section>
  );
};

export default Contact;