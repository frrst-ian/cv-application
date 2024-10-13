/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { PackageCheck } from "lucide-react";


const CVPreview = React.forwardRef(
  ({ personalInfo, educations, experiences }, ref) => {
    return (
      <div className="cv-preview" ref={ref}>
        <div className="personal-info">
          <div className="info-1">
            <p id="name">{personalInfo.name}</p>
            
          </div>
          <div className="info-2">
            <div className="info-div">
              <Mail size={25} color="#0f172a"/>
              <p>{personalInfo.email}</p>
            </div>
            <div className="info-div">
              <Phone color="#0f172a"/>
              <p>{personalInfo.phoneNumber}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="title cv-title">
          <GraduationCap size={45} color="#0f172a" />
          <h2 className="cv-prev-title">Education</h2>
        </div>
        {educations.map((edu) => (
          <div key={edu.id} className="education-entry">
            <h3 className="subtitle">{edu.school}</h3>
            <p>{edu.titleOfStudy}</p>
            <p>{edu.date}</p>
          </div>
        ))}
        <div className="title cv-title">
          <PackageCheck size={45} color="#0f172a" />
          <h2 className="cv-prev-title">Experience</h2>
        </div>
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-entry">
            <h3 className="subtitle">{exp.position}</h3>
            <p>{exp.company}</p>
            <p>{exp.dateOfWork}</p>
            <p className="cv-responsibility">{exp.responsibilities}</p>
          </div>
        ))}
      </div>
    );
  }
);

export default CVPreview;
