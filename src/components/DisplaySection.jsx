import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import DisplayGeneralInfo from "./DisplayGeneralInfo";

function DisplaySection({
  dataEditMode,
  currentResumeData,
  onGeneralInfoSetEditMode,
  onEducationSetEditMode,
  onExperienceSetEditMode,
  onChangeEducationItemToEdit,
  onChangeExperienceItemToEdit,
  onDeleteGeneralInfoData,
}) {
  return (
    <div className="display-section">
      <DisplayGeneralInfo
        onSetEditMode={onGeneralInfoSetEditMode}
        onDeleteData={onDeleteGeneralInfoData}
        general={currentResumeData.generalInfo}
      />
      <DisplayEducation
        editMode={dataEditMode.education}
        educationList={currentResumeData.education}
        onSetEditMode={onEducationSetEditMode}
        onChangeItemToEdit={onChangeEducationItemToEdit}
      />
      <DisplayExperience
        editMode={dataEditMode.experience}
        experienceList={currentResumeData.experience}
        onSetEditMode={onExperienceSetEditMode}
        onChangeItemToEdit={onChangeExperienceItemToEdit}
      />
    </div>
  );
}

export default DisplaySection;
