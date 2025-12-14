// About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container section-wrapper">
        <h2 className="display-6 fw-bold text-center mb-4">About Me</h2>

        <div className="section-title-underline"></div>
        <div className="row g-4 align-items-center">
          <div className="col-md-7">
            <p className="lead mb-3">
              Aspiring Frontend Developer based in Kolkata, India, with strong
              programming skills in HTML, CSS, JavaScript, and React. Solid
              foundation in Java, C, and C++. Passionate about problem-solving
              and creating responsive, user-friendly web applications.
            </p>
            <p className="mb-3">
              Committed to building efficient, scalable solutions using modern
              web technologies. Experienced in delivering projects with high
              user satisfaction and clean interfaces.
            </p>
          </div>

          <div className="col-md-5">
            <div className="row g-3">
              <div className="col-6">
                <div className="inner-card text-center">
                  <div className="h3 mb-1">3+</div>
                  <div className="small text-muted">Projects</div>
                </div>
              </div>
              <div className="col-6">
                <div className="inner-card text-center">
                  <div className="h3 mb-1">4</div>
                  <div className="small text-muted">Months Internship</div>
                </div>
              </div>
              <div className="col-6">
                <div className="inner-card text-center">
                  <div className="h3 mb-1">7.4</div>
                  <div className="small text-muted">B.Tech CGPA</div>
                </div>
              </div>
              <div className="col-6">
                <div className="inner-card text-center">
                  <div className="h5 mb-1">Kolkata</div>
                  <div className="small text-muted">Location</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;