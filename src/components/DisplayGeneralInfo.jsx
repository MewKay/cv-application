import resumeData from "../resumeData";

function DisplayGeneralInfo() {
  const general = resumeData.generalInfo;

  return (
    <div id="display-general-info">
      <h2>{general.fullName}</h2>
      <div className="display-additional-info">
        <p className="display-email">{general.email}</p>
        <p className="display-phone-number">{general.phoneNumber}</p>
      </div>
    </div>
  );
}

export default DisplayGeneralInfo;
