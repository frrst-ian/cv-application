/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const PersonalInfoPreview = ({ name, email, phoneNumber }) => {
  return (
    <div className="preview-container">
      <h2>{name || "Gintama"}</h2>
      <p className="para">{email || "oddjobs@proton.me"}</p>
      <p className="para">{phoneNumber || "9413142781"}</p>
    </div>
  );
};

export default PersonalInfoPreview;
