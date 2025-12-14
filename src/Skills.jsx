import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiC, SiCplusplus, SiJavascript, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa"; 
import { FaGitAlt, FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container section-wrapper">
        <h2 className="display-5 fw-bold text-center mb-1">Skills</h2>
        <div className="section-title-underline"></div>

        <div className="row g-4">
          {/* Technologies */}
          <div className="col-lg-6 col-md-12">
            <div className="inner-card p-4 h-100">
              <h3 className="h5 fw-semibold mb-3">Technologies</h3>
              <div className="row g-3">
                <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                  <FaHtml5 size={40} color="#e34f26" />
                  <span className="mt-2 tech-label">HTML</span>
                </div>
                <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                  <FaCss3Alt size={40} color="#0d1c72ff" />
                  <span className="mt-2 tech-label">CSS</span>
                </div>
                <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                  <FaJsSquare size={40} color="#f7df1e" />
                  <span className="mt-2 tech-label">JavaScript</span>
                </div>
                <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                  <FaReact size={40} color="#61dafb" />
                  <span className="mt-2 tech-label">React</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="col-lg-6 col-md-12">
            <div className="inner-card p-4 h-100">
              <h3 className="h5 fw-semibold mb-3">Languages</h3>
          
              <div className="row g-3">
                <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                  <FaJava size={40} color="#f89820" />
                  <span className="mt-2 tech-label">Java</span>
                </div>
          
                <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                  <SiC size={40} color="#a8b9cc" />
                  <span className="mt-2 tech-label">C</span>
                </div>
          
                <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                  <SiCplusplus size={40} color="#00599c" />
                  <span className="mt-2 tech-label">C++</span>
                </div>
          
                <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                  <SiJavascript size={40} color="#f7df1e" />
                  <span className="mt-2 tech-label">JavaScript</span>
                </div>
          
                {/* <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                  <SiMysql size={40} color="#00758f" />
                  <span className="mt-2 tech-label">SQL</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Tools */}
         <div className="col-lg-6 col-md-12">
           <div className="inner-card p-4 h-100">
             <h3 className="h5 fw-semibold mb-3">Tools</h3>
                         
             <div className="row g-3">
               <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                 <FaGitAlt size={40} color="#f05133" />
                 <span className="mt-2 tech-label">Git</span>
               </div>
                         
               <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                 <FaGithub size={40} color="#ffffff" />
                 <span className="mt-2 tech-label">GitHub</span>
               </div>
             </div>
           </div>
         </div>

          {/* Databases */}
        <div className="col-lg-6 col-md-12">
          <div className="inner-card p-4 h-100">
           <h3 className="h5 fw-semibold mb-3">Databases</h3>
                        
            <div className="row g-3">
              <div className="col-6 col-sm-3 d-flex flex-column align-items-center">
                <SiMysql size={50} color="#04471aff" />
                <span className="mt-2 tech-label">MySQL / SQL</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;