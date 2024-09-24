import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

function EditSection({ dataEditMode }) {
  return (
    <div className="edit-section">
      <GeneralInfo editMode={dataEditMode.generalInfo} />
      <Education editMode={dataEditMode.education} />
      <Experience editMode={dataEditMode.experience} />
    </div>
  );
}

export default EditSection;
