import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import DisplayGeneralInfo from "./DisplayGeneralInfo";

function DisplaySection() {
  return (
    <div className="display-section">
      <DisplayGeneralInfo />
      <DisplayEducation />
      <DisplayExperience />
    </div>
  );
}

export default DisplaySection;
