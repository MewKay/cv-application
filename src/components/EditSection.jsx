import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

function EditSection({
  dataEditMode,
  currentResumeData,
  educationItemIndexToEdit,
  experienceItemIndexToEdit,
  onGeneralInfoEditModeReset,
  onEducationEditModeReset,
  onExperienceEditModeReset,
  onEducationSetEditMode,
  onGeneralInfoSave,
  onEducationSave,
  onExperienceSave,
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
        onSetEditMode={onEducationSetEditMode}
        onDataSave={onEducationSave}
      />
      <Experience
        currentExperienceData={currentResumeData.experience}
        editMode={dataEditMode.experience}
        itemIndexToEdit={experienceItemIndexToEdit}
        onEditModeReset={onExperienceEditModeReset}
        onDataSave={onExperienceSave}
      />
    </div>
  );
}

export default EditSection;
