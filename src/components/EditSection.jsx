import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

function EditSection({
  dataEditMode,
  currentResumeData,
  educationItemIndexToEdit,
  onGeneralInfoEditModeReset,
  onEducationEditModeReset,
  onExperienceEditModeReset,
  onGeneralInfoSave,
  onEducationSave,
}) {
  return (
    <div className="edit-section">
      <GeneralInfo
        currentGeneralInfoData={currentResumeData.generalInfo}
        editMode={dataEditMode.generalInfo}
        onEditModeReset={onGeneralInfoEditModeReset}
        onDataSave={onGeneralInfoSave}
      />
      <Education
        currentEducationData={currentResumeData.education}
        editMode={dataEditMode.education}
        itemIndexToEdit={educationItemIndexToEdit}
        onEditModeReset={onEducationEditModeReset}
        onDataSave={onEducationSave}
      />
      <Experience
        editMode={dataEditMode.experience}
        onEditModeReset={onExperienceEditModeReset}
      />
    </div>
  );
}

export default EditSection;
