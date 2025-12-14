// Hero.jsx
import profileImg from "./assets/53554900377.png";

import React from "react";

const Hero = () => {
  return (
    <section id="home" className="py-5">
      <div className="container section-wrapper">
        <div className="row align-items-center">
          {/* Left text */}
          <div className="col-md-7">
            <h1 className="display-3 fw-bold mb-3">Mohammed Zaid</h1>
            <h2 className="h3 text-secondary mb-4">Aspiring Frontend Developer</h2>
            <p className="lead mb-4">
              Passionate about building responsive web applications with React, JavaScript,
              and modern web technologies. Strong problem-solver with hands-on experience
              in creating scalable solutions.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="#contact" className="btn btn-primary btn-lg">
                Get In Touch
              </a>
              <a href="/Mohammed_Zaid_CV.pdf" className="btn btn-outline-secondary btn-lg" download>
                Download CV
              </a>
            </div>
            <div className="mt-4">
                  <div className="fw-semibold">
                    <a href="mailto:mdzade007@gmail.com" className="text-decoration-none">
                      mdzade007@gmail.com
                    </a>
                  </div>
                  <div className="fw-semibold">
                    <a href="tel:+918481025140" className="text-decoration-none">
                      +91 8481025140
                    </a>
                  </div>
                </div>
        </div>

          {/* Right avatar card with your photo */}
        <div className="col-md-5 mt-4 mt-md-0">
          <div className="hero-avatar-card d-flex justify-content-center align-items-center p-4">
            <img src={profileImg} alt="Mohammed Zaid" className="hero-avatar"/>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;