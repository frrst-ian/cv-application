/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { GraduationCap } from "lucide-react";

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

  const handleDeleteEdu = (id) => {
    setEducations(educations.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      {educations.map((edu) => (
        <div className="education-form" key={edu.id}>
          <div className="title">
            <GraduationCap size={28} />
            <h2 className="form-title">Education</h2>
          </div>

          <input
            type="text"
            value={edu.school}
            onChange={(e) =>
              handleEducationChange(edu.id, "school", e.target.value)
            }
            placeholder="University"
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
            placeholder="Date of Study"
          />

          <button
            className="btn btn-del"
            onClick={() => handleDeleteEdu(edu.id)}
          >
            Delete Education
          </button>
        </div>
      ))}
      <button className="btn btn-add" onClick={handleAddEducation}>
        Add Education
      </button>
    </div>
  );
};

export default Education;
