import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

function EditSection({
  dataEditMode,
  currentResumeData,
  onGeneralInfoEditModeReset,
  onEducationEditModeReset,
  onExperienceEditModeReset,
}) {
  return (
    <div className="edit-section">
      <GeneralInfo
        currentGeneralInfoData={currentResumeData.generalInfo}
        editMode={dataEditMode.generalInfo}
        onEditModeReset={onGeneralInfoEditModeReset}
      />
      <Education
        editMode={dataEditMode.education}
        onEditModeReset={onEducationEditModeReset}
      />
      <Experience
        editMode={dataEditMode.experience}
        onEditModeReset={onExperienceEditModeReset}
      />
    </div>
  );
}

export default EditSection;
