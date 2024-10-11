/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Experience = ({ experiences, setExperiences }) => {
  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      { id: uuidv4(), position: "", company: "", dateOfWork: "" },
    ]);
  };

  const handleExperienceChange = (id, field, value) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <div>
      {experiences.map((exp) => (
        <div className="experience-form" key={exp.id}>
          <h2>Experience</h2>

          <input
            type="text"
            value={exp.position}
            onChange={(e) =>
              handleExperienceChange(exp.id, "position", e.target.value)
            }
            placeholder="Position"
          />
          <input
            type="text"
            value={exp.company}
            onChange={(e) =>
              handleExperienceChange(exp.id, "company", e.target.value)
            }
            placeholder="Company"
          />
          <input
            type="text"
            value={exp.dateOfWork}
            onChange={(e) =>
              handleExperienceChange(exp.id, "dateOfWork", e.target.value)
            }
            placeholder="Date of Work"
          />
        </div>
      ))}
      <button className="btn" onClick={handleAddExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
