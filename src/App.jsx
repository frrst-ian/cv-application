/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import CVPreview from "./components/CVPreview";
import EditPersonalInfo from "./components/EditPersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { Github } from "lucide-react";
import { jsPDF } from "jspdf";
import { FilePen } from 'lucide-react';
import html2canvas from "html2canvas";
import "./App.css";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const [educations, setEducations] = useState([
    { id: uuidv4(), school: "", titleOfStudy: "", date: "" },
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: uuidv4(),
      position: "",
      company: "",
      dateOfWork: "",
      responsibilities: "",
    },
  ]);

  const handleLoadExample = () => {
    setPersonalInfo({
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
    });
    setEducations([
      {
        id: uuidv4(),
        school: "My Dream University",
        titleOfStudy: "Bachelor of Science in Computer Science",
        date: "2016 - 2020",
      },
      {
        id: uuidv4(),
        school: "My Dream HighSchool",
        titleOfStudy: "Computer System",
        date: "2012 - 2016",
      },
    ]);
    setExperiences([
      {
        id: uuidv4(),
        position: "Manager",
        company: "ABC company",
        dateOfWork: "2023 - 2024",
        responsibilities: "Making sure the project is successful",
      },
    ]);
  };

  const handleReset = () => {
    setPersonalInfo({ name: "", email: "", phoneNumber: "" });
    setEducations([{ id: uuidv4(), school: "", titleOfStudy: "", date: "" }]);
    setExperiences([
      {
        id: uuidv4(),
        position: "",
        company: "",
        dateOfWork: "",
        responsibilities: "",
      },
    ]);
  };

  const componentRef = useRef();

  const handleGeneratePDF = () => {
    const input = componentRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: [8.5, 13],
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0.5;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("cv.pdf");
    });
  };

  return (
    <div className="app">
      <div className="header">
        <FilePen size={42}/>
        <h2>CV Builder</h2>
      </div>
      <div className="main-container">
        <div className="form-section">
          <EditPersonalInfo
            personalInfo={personalInfo}
            onPersonalInfoChange={handlePersonalInfoChange}
          />
          <Education educations={educations} setEducations={setEducations} />
          <Experience
            experiences={experiences}
            setExperiences={setExperiences}
          />
          <div className="button-group">
            <button onClick={handleLoadExample} className="btn btn-load">
              Load Example
            </button>
            <button onClick={handleReset} className="btn btn-reset">
              Reset
            </button>
            <button onClick={handleGeneratePDF} className="btn btn-pdf">
              Generate PDF
            </button>
          </div>
        </div>
        <div className="preview-section">
          <CVPreview
            ref={componentRef}
            personalInfo={personalInfo}
            educations={educations}
            experiences={experiences}
          />
        </div>
      </div>
      <div className="footer">
      <a href="https://github.com/frrst-ian" target="_blank" >
            <Github size={30} />
        </a>
        <h3>Made by Ian Forrest</h3>
      </div>
    </div>
  );
};

export default App;
