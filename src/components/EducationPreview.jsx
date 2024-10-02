/* eslint-disable react/prop-types */
const EducationPreview = ({ education, onEdit, onDelete }) => {
  return (
    <div className="education-preview">
      <h3>{education.school || "Shibuya University"}</h3>
      <p className="para">
        {education.titleOfStudy || "Business Administration"}
      </p>
      <p className="para">{education.date || "April 1 2000 - Jan 5 2004"}</p>
      <div className="btn-container">
        <button onClick={onEdit} className="btn btn-submit">
          Submit
        </button>
        <button onClick={onDelete} className="btn btn-del">
            Delete
        </button>
      </div>
    </div>
  );

};

export default EducationPreview;