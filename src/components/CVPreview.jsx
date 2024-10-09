/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';

const CVPreview = React.forwardRef(({ personalInfo, educations }, ref) => {
  return (
    <div className="cv-preview" ref={ref}>
      <p id='name'>Name: {personalInfo.name || 'N/A'}</p>
      <p>Email: {personalInfo.email || 'N/A'}</p>
      <p>Phone: {personalInfo.phoneNumber || 'N/A'}</p>
      <h2>Education</h2>
      {educations.map((edu) => (
        <div key={edu.id} className="education-entry">
          <h3>{edu.school || 'School Name'}</h3>
          <p>{edu.titleOfStudy || 'Title of Study'}</p>
          <p>{edu.date || 'Study Dates'}</p>
        </div>
      ))}
    </div>
  );
});

export default CVPreview;