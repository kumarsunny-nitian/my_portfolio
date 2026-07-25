import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">
        03 — <span>Projects</span>
      </h2>

      <div className="projects-container">
        {/* HIREMIND-AI APPLICATION */}
        <div className="project-card">
          <h3 className="project-title">HireMind-AI</h3>

          <p className="project-description">
            An AI-powered full-stack recruitment platform that enables
            recruiters to post jobs and candidates to apply with resume uploads.
            It features JWT-based authentication, role-based access control, AI
            resume analysis, ATS scoring, resume parsing, intelligent job
            matching, and AI-generated interview questions. Built with the MERN
            stack, Redis, BullMQ, Cloudinary, and OpenAI API to deliver a modern
            and scalable hiring experience.
          </p>

          <div className="project-buttons">
            <a
              href="https://github.com/kumarsunny-nitian/HireMind-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>

            <a
              href="https://hire-mind-ai-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-btn"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* WHATSAPP CHAT ANALYZER */}
        <div className="project-card">
          <h3 className="project-title">WhatsApp Chat Analyzer</h3>

          <p className="project-description">
            An AI-powered WhatsApp Chat Analyzer that provides detailed insights
            into chat activity, including message statistics, user activity,
            word frequency, emoji analysis, and interactive visualizations.
            Built with Python, Streamlit, Pandas, Matplotlib, and WordCloud to
            transform exported WhatsApp chats into meaningful analytics through
            an intuitive web interface.
          </p>

          <div className="project-buttons">
            <a
              href="https://github.com/kumarsunny-nitian/WhatsApp-Chat-Analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>

            <a
              href="https://sunny-whatsapp-chat-analyzer.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-btn"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* BOOKVERSE */}
        <div className="project-card">
          <h3 className="project-title">BookVerse</h3>

          <p className="project-description">
            A full-stack online bookstore built using the MERN stack with
            JWT-based authentication, product browsing, cart and order
            management, and responsive UI. Deployed on Vercel.
          </p>

          <div className="project-buttons">
            <a
              href="https://github.com/kumarsunny-nitian/BookVerse"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>

            <a
              href="https://book-verse-weld.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-btn"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
