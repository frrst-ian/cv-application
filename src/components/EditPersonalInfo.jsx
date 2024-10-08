/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const EditPersonalInfo = ({ personalInfo, onPersonalInfoChange }) => {
  return (
    <div className="personal-form">
      <h2 id="header-personal-info">Personal Information</h2>

      <input
        type="text"
        value={personalInfo.name}
        onChange={(e) => onPersonalInfoChange("name", e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={personalInfo.email}
        onChange={(e) => onPersonalInfoChange("email", e.target.value)}
        placeholder="Email"
      />
      <input
        type="tel"
        value={personalInfo.phoneNumber}
        onChange={(e) => onPersonalInfoChange("phoneNumber", e.target.value)}
        placeholder="Phone Number"
      />
    </div>
  );
};

export default EditPersonalInfo;
