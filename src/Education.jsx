// Education.jsx
import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electronics and Communication",
      institution: "Heritage Institute of Technology, Kolkata",
      score: "CGPA 7.4",
    },
    {
      degree: "Higher Secondary Education",
      field: "",
      institution:
        "West Bengal Council of Higher Secondary Education (WBCHSE)",
      score: "75%",
    },
    {
      degree: "Secondary Education",
      field: "",
      institution: "West Bengal Board of Secondary Education (WBBSE)",
      score: "84%",
    },
  ];

  return (
    <section id="education" className="py-5">
      <div className="container section-wrapper">
        <h2 className="display-6 fw-bold text-center mb-4">Education</h2>

        <div className="section-title-underline"></div>

        <div className="row g-4">
          {education.map((edu) => (
            <div key={edu.institution} className="col-md-4">
              <div className="inner-card h-100">
                  <h3 className="h5 card-title">{edu.degree}</h3>
                  {edu.field && (
                    <p className="small text-muted mb-1">{edu.field}</p>
                  )}
                  <p className="fw-semibold mb-2">
                    {edu.institution}
                  </p>
                  <span className="badge bg-success">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;