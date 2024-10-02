/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import EditEducation from "./EditEducation";
import EducationPreview from "./EducationPreview";
import { v4 as uuidv4 } from "uuid";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    school: "",
    titleOfStudy: "",
    date: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation({ ...currentEducation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setEducation(
        education.map((edu) =>
          edu.id === editingId ? { ...currentEducation, id: editingId } : edu
        )
      );
      setEditingId(null);
    } else {
      const newEducation = {
        id: uuidv4(),
        ...currentEducation,
      };
      setEducation([...education, newEducation]);
    }
    setCurrentEducation({ school: "", titleOfStudy: "", date: "" });
  };

  const handleEdit = (id) => {
    const eduToEdit = education.find((edu) => edu.id === id);
    setCurrentEducation(eduToEdit);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  return (
    <div className="education">
      <h2 className="education-header-text">Education</h2>

      <EditEducation
        education={currentEducation}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />

      {education.map((edu) => (
        <EducationPreview
          key={edu.id}
          education={edu}
          onEdit={() => handleEdit(edu.id)}
          onDelete={() => handleDelete(edu.id)}
        />
      ))}
    </div>
  );
};

export default Education;
