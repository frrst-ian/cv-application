/* eslint-disable react/prop-types */
const EditEducation = ({ education, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="cv-form">
      <input
        type="text"
        value={education.school}
        onChange={onInputChange}
        placeholder="University/School"
      />
      <input
        type="text"
        value={education.titleOfStudy}
        onChange={onInputChange}
        placeholder="Title of Study"
      />
      <input
        type="text"
        value={education.date}
        onChange={onInputChange}
        placeholder="Date of Study"
      />
      <button className="btn" type="submit">
        {education.id ? "Update" : "Add"} Education
      </button>
    </form>
  );
};

export default EditEducation;
