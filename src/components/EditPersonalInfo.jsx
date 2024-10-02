/* eslint-disable react/prop-types */
const EditPersonalInfo = ({
  name,
  email,
  phoneNumber,
  onNameChange,
  onEmailChange,
  onPhoneNumberChange,
}) => {
  return (
    <form  className="cv-form">
      <input
        type="text"
        value={name}
        onChange={onNameChange}   
        placeholder="Full Name"
      />
      <input
        type="text"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
      />
      <input
        type="text"
        value={phoneNumber}
        onChange={onPhoneNumberChange}
        placeholder="Phone Number"
      />
    </form>
  );
};

export default EditPersonalInfo;
