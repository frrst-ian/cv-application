/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import EditPersonalInfo from "./EditPersonalInfo";
import PersonalInfoPreview from "./PersonalInfoPreview";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [submittedName] = useState("");
  const [submittedEmail] = useState("");
  const [submittedPhoneNumber] = "";

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
