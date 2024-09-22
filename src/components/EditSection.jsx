import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

function EditSection() {
  return (
    <div className="edit-section">
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default EditSection;
