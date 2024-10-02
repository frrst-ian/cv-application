/* eslint-disable react/prop-types */
import React from 'react';
import { useReactToPrint } from 'react-to-print';

const CVPreview = ({ personalInfo, education }) => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div ref={componentRef}>
        <h2>Personal Information</h2>
        <p>Name: {personalInfo.name}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>

        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.id}>
            <h3>{edu.school}</h3>
            <p>{edu.titleOfStudy}</p>
            <p>{edu.date}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePrint} className="btn">Print CV</button>
    </div>
  );
};

export default CVPreview;