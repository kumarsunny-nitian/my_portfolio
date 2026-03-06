import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">
        03 — <span>Projects</span>
      </h2>

      <div className="projects-container">

        {/* EASY CYCLE APPLICATION */}
          <div className="project-card">
            <h3 className="project-title">EasyCycle</h3>

            <p className="project-description">
              A responsive full-stack web application built to streamline bicycle
              sharing within college campuses. It helps students easily borrow a
              cycle when theirs is unavailable or during their initial days at the
              college, while also allowing others to lend their unused cycles,
              improving accessibility and resource sharing among students.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/kumarsunny-nitian/Easycycle"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

              <a
                href="https://easycycle-wmcg.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live Demo
              </a>
            </div>
          </div>

        {/* BLOG APPLICATION */}
        <div className="project-card">
          <h3 className="project-title">Blog Application</h3>

          <p className="project-description">
            A full-stack CRUD blog platform that enables users to create,
            edit, view, and delete blog posts using RESTful APIs. 
            Built with Node.js, Express, MongoDB, and EJS, the application 
            follows clean MVC architecture and demonstrates strong backend 
            fundamentals with efficient database handling.
          </p>

          <div className="project-buttons">
            <a
              href="https://github.com/kumarsunny-nitian/Blog-App"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* BOOKVERSE */}
        <div className="project-card">
          <h3 className="project-title">BookVerse</h3>

          <p className="project-description">
            BookVerse is a full-stack online bookstore application built using
            the MERN stack. It includes JWT-based authentication, product
            browsing, cart and order management, and responsive UI. The project
            demonstrates secure backend integration and seamless frontend
            experience with live deployment on Vercel.
          </p>

          <div className="project-buttons">
            <a
              href="https://book-verse-weld.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-btn"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/kumarsunny-nitian/BookVerse"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;