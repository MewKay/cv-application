import DisplayEducation from "./DisplayEducation";
import DisplayGeneralInfo from "./DisplayGeneralInfo";

function DisplaySection() {
  return (
    <div className="display-section">
      <DisplayGeneralInfo />
      <DisplayEducation />
    </div>
  );
}

export default DisplaySection;
