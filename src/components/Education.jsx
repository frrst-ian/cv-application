/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Education = ({ educations, setEducations }) => {
  const handleAddEducation = () => {
    setEducations([
      ...educations,
      { id: uuidv4(), school: "", titleOfStudy: "", date: "" },
    ]);
  };

  const handleEducationChange = (id, field, value) => {
    setEducations(
      educations.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  return (
    <div>
      {educations.map((edu) => (
        <div className="education-form" key={edu.id}>
          <h2>Education</h2>

          <input
            type="text"
            value={edu.school}
            onChange={(e) =>
              handleEducationChange(edu.id, "school", e.target.value)
            }
            placeholder="School"
          />
          <input
            type="text"
            value={edu.titleOfStudy}
            onChange={(e) =>
              handleEducationChange(edu.id, "titleOfStudy", e.target.value)
            }
            placeholder="Title of Study"
          />
          <input
            type="text"
            value={edu.date}
            onChange={(e) =>
              handleEducationChange(edu.id, "date", e.target.value)
            }
            placeholder="Date"
          />
        </div>
      ))}
      <button className="btn" onClick={handleAddEducation}>
        Add Education
      </button>
    </div>
  );
};

export default Education;
