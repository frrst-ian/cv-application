/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import EditPersonalInfo from "./EditPersonalInfo";
import PersonalInfoPreview from "./PersonalInfoPreview";
import { v4 as uuidv4 } from "uuid";
const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = "";
  const [experience, setExperience] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setSubmittedEmail(email);
    setSubmittedPhoneNumber(phoneNumber);
    setIsEditing(false);
  };


  function addExperience(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    const id = uuidv4();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const desc = e.target[4].value;

    let newExperience = { id, position, company, start, end, desc };
    setExperience([...experience, newExperience]);
    clear(e);
  }

  function clear(e) {
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].value = "";
    }
  }
  function deleteExperience(id) {
    console.log(id);
    setExperience((currentExperience) => {
      return currentExperience.filter((exp) => exp.id !== id);
    });
  }

  function saveExperience(e, id) {
    e.preventDefault();

    let position = e.target[0].value;
    let company = e.target[1].value;
    let start = e.target[2].value;
    let end = e.target[3].value;
    let desc = e.target[4].value;
    let updateExp = { position, company, start, end, desc };
    setExperience(
      experience.map((exp) => {
        if (exp.id === id) {
          return { ...exp, ...updateExp };
        } else {
          return exp;
        }
      })
    );
  }

  function addEducation(e) {
    e.preventDefault();
    console.log("Clicked on Add education");
    const id = uuidv4();
    const course = e.target[0].value;
    const university = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    let newEducation = { id, course, university, start, end };
    setEducation([...education, newEducation]);
    clear(e);
  }


  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="personal-info">
      <div className="personal-form">
        <div className="form-container">
        <h1>Personal Information</h1>

          <EditPersonalInfo
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            onNameChange={(e) => setName(e.target.value)}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPhoneNumberChange={(e) => setPhoneNumber(e.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
        <div className="form-container">
          <PersonalInfoPreview
            name={isEditing ? name : submittedName}
            email={isEditing ? email : submittedEmail}
            phoneNumber={isEditing ? phoneNumber : submittedPhoneNumber}
            isEditing={isEditing}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
