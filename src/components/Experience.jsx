/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { PackageCheck } from "lucide-react";

const Experience = ({ experiences, setExperiences }) => {
  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: uuidv4(),
        position: "",
        company: "",
        dateOfWork: "",
        responsibilities: "",
      },
    ]);
  };

  const handleExperienceChange = (id, field, value) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      {experiences.map((exp) => (
        <div className="experience-form" key={exp.id}>
          <div className="title">
            <PackageCheck size={28} />
            <h2 className="form-title">Experience</h2>
          </div>

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
          <textarea
            type="text"
            value={exp.responsibilities}
            onChange={(e) =>
              handleExperienceChange(exp.id, "responsibilities", e.target.value)
            }
            placeholder="Responsibilities"
          />

          <button
            className="btn btn-del"
            onClick={() => handleDeleteExperience(exp.id)}
          >
            Delete Experience
          </button>
        </div>
      ))}
      <button className="btn btn-add" onClick={handleAddExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
