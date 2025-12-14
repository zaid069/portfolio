// Projects.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Currency Exchange Platform",
      description:
        "User-friendly web application for currency conversion and exchange rate information.",
      tools: ["React"],
      outcome: "95% user satisfaction during testing",
    },
    {
      title: "Quiz Website",
      description:
        "Multiple choice quiz website with responsive design and smooth user experience.",
      tools: ["HTML", "CSS", "React"],
      outcome: "100% error‑free interface",
    },
    {
      title: "QR Code Generator",
      description:
        "Web application that generates QR codes for URLs with clean, responsive UI.",
      tools: ["HTML", "CSS", "JavaScript"],
      outcome: "100% error‑free interface",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container section-wrapper">
        <h2 className="display-6 fw-bold text-center mb-4">Projects</h2>

        <div className="section-title-underline"></div>

        <div className="row g-4">
          {projects.map((p) => (
            <div key={p.title} className="col-md-4 mb-4">
              <div className="inner-card h-100 d-flex flex-column">
                  <h3 className="h5 card-title">{p.title}</h3>
                  <p className="card-text flex-grow-1">{p.description}</p>

                  <div className="mb-2">
                    <strong>Tech:</strong>{" "}
                    {p.tools.map((t) => (
                      <span key={t} className="badge bg-secondary me-1">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-outcome mb-3">✅ {p.outcome}</div>

                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-dark btn-sm">
                      <FaGithub className="me-1" />
                      GitHub
                    </button>
                    <button className="btn btn-primary btn-sm">
                      <FaExternalLinkAlt className="me-1" />
                      Live Demo
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;