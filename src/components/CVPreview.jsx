/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";

const CVPreview = React.forwardRef(
  ({ personalInfo, educations, experiences }, ref) => {
    return (
      <div className="cv-preview" ref={ref}>
        <div className="personal-info">
          <div className="info-1">
            <p id="name">{personalInfo.name}</p>
          </div>
          <div className="info-2">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phoneNumber}</p>
          </div>
        </div>
        <hr />
        <h2>Education</h2>
        {educations.map((edu) => (
          <div key={edu.id} className="education-entry">
            <h3>{edu.school}</h3>
            <p>{edu.titleOfStudy}</p>
            <p>{edu.date}</p>
          </div>
        ))}
        <h2>Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-entry">
            <h3>{exp.position}</h3>
            <p>{exp.company}</p>
            <p>{exp.dateOfWork}</p>
          </div>
        ))}
      </div>
    );
  }
);

export default CVPreview;
