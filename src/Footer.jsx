// Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-3 bg-dark text-light mt-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="fw-semibold">© 2025 Mohammed Zaid</div>
        <div className="d-flex gap-3 mt-2 mt-md-0">
          <a
            href="https://www.linkedin.com/in/mohammed-zaid-694550328"
            target="_blank"
            rel="noreferrer"
            className="text-light"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-light"
          >
            <FaGithub />
          </a>
          <a href="mailto:mdzade007@gmail.com" className="text-light">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;