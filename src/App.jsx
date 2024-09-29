import { useState } from "react";
import CVForm from "components/CVForm";
import CVPreview from "components/CVPreview";
import "App.css";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

const App = () => {
  const [cv, setCV] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    experience: "",
  });

  const handleUpdateCV = (section, newData) => {
    setCV((prevCV) => ({
      ...prevCV,
      ...newData,
    }));
  };

  return (
    <div className="app">
      <h1>CV Builder</h1>
      <div className="cv-container">
        <CVForm onUpdateCV={handleUpdateCV} cv={cv} />
        <CVPreview cv={cv} />
      </div>
    </div>
  );
};

export default App;
